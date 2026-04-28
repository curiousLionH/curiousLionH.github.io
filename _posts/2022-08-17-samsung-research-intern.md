---
layout: post
title: "Intern @ Samsung Research — IMU-Based Action Recognition for Wearable Robot"
date: 2022-08-17
categories: project
tags: [action-recognition, IMU, SVM, machine-learning, wearable-robot, samsung]
math: true
---

> **Organization**: Samsung Research, Robot Center GEMS LAB  
> **Period**: Jul 2022 – Aug 2022 (5 weeks)  
> **Role**: University Student Intern (SW Development)

---

## Overview

During the summer of 2022, I interned at **Samsung Research's Robot Center GEMS LAB**, where I developed an **IMU-based action recognition algorithm** for wearable robots. The goal was to classify boxing punch motions from wrist-worn IMU sensors in real time, with the results intended for deployment on SR's wearable robot platform.

**Keywords**: Action Recognition, Human-Robot Interaction (HRI)

---

## Problem Definition

Wearable robots need to understand the user's intended motion to provide appropriate assistance. The task was to recognize **6 boxing punch types** from dual-wrist IMU data:

| Label | Motion |
|-------|--------|
| RS | Right Straight |
| RH | Right Hook |
| RU | Right Upper Cut |
| LS | Left Straight |
| LH | Left Hook |
| LU | Left Upper Cut |

---

## System Pipeline

### Hardware Setup

Two sensor boards were used:

- **Wireless (prototype)**: Nicla Sense ME — BHI260AP (6DoF), BLE communication via Python `asyncio`
  - Collected: Acceleration (x,y,z), Gyroscope (x,y,z), Quaternion (x,y,z,w)
  - Logging frequency: 40 Hz (one hand), 12 Hz (two hands)
- **Wired (production robot)**: EBIMU-9DOF (9DoF), 5 IMUs mounted across the body
  - WiFi communication via Unity log modification
  - Logging frequency: 100 Hz

### Full Pipeline

```
Data Acquisition → Pre-processing → Feature Extraction → Feature Selection → Classification Model
```

**Data collection**: 5 subjects × 200 samples per class

---

## Pre-processing

### 1. EWMA Smoothing

The wearable robot's IMU sensors (especially arms #2, #3, #4) vibrate heavily due to imperfect body contact. Applied an **Exponential Weighted Moving Average (EWMA)** filter:

$$
EWMA(t) = \frac{Data_t + (1-\alpha)Data_{t-1} + (1-\alpha)^2 Data_{t-2} + \cdots}{1 + (1-\alpha) + (1-\alpha)^2 + \cdots}, \quad \alpha = \frac{2}{N+1}
$$

### 2. Windowing

Compared three windowing strategies:

1. **Fixed Sliding Window** — rejected: inappropriate for segmenting discrete punch events
2. **Behavior Definition Window** — rejected: ambiguous activity transitions, generates windows during rest
3. **Event Definition Window** ✓ — selected: detect peak in Y-axis acceleration, extract ±0.5s around each peak

For real-time (on-the-fly) operation, a minimum threshold derived from reference log data triggers peak detection dynamically.

### 3. Quaternion → Euler Angles

Converted quaternion $(x,y,z,w)$ to roll/pitch/yaw using:

```python
roll  = np.arctan2(2*(w*x + y*z), 1 - 2*(x*x + y*y))
pitch = np.arcsin(np.clip(2*(w*y - z*x), -1, 1))
yaw   = np.arctan2(2*(w*z + x*y), 1 - 2*(y*y + z*z))
```

### 4. Data Augmentation

Added Gaussian noise (σ calibrated to sensor resolution) to existing windows to address data scarcity.

---

## Feature Extraction

Total **1,455 features** extracted per window:

| Feature Type | Composition | Count |
|---|---|---|
| Time Domain | 9 stats × 6 channels × 5 sensors | 270 |
| Frequency Domain | 9 stats × 4 wavelet levels × 6 channels × 5 sensors | 1,080 |
| Correlation | 15C2 pairs of roll/pitch/yaw across 5 sensors | 105 |

Stats: max, min, mean, median, std, skewness, kurtosis, argmax, argmin

---

## Classifier Design

A hierarchical 3-model structure was used:

```
Input → M1 (SVM): Right vs. Left hand
            ├─ Right → M2 (SVM/CNN): RS / RH / RU
            └─ Left  → M3 (SVM/CNN): LS / LH / LU
```

Feature selection via t-test p-value ranking: top 50 features for M1, top 100 for M2/M3.

### Results

| Model | Classifier | Test Accuracy |
|-------|-----------|---------------|
| M1 (R vs. L) | SVM | **100%** |
| M2 (Right 3-class) | SVM | **100%** |
| M2 (Right 3-class) | CNN | 61.11% |
| M3 (Left 3-class) | SVM | 77.78% |
| M3 (Left 3-class) | CNN | 77.78% |
| One-hand triple (ANN) | ANN | 94.44% |

SVM dominated. CNN underperformed due to the feature-engineered (non-raw) input format being ill-suited for convolutional processing.

---

## On-the-Fly Recognition

Deployed the full pipeline in real time:
1. Reference log from same subject → determine dynamic peak threshold
2. Continuously detect peaks in incoming stream
3. Extract window → feature engineering → classification → output label

---

## OJT: Lower-Body Wearable Robot

As a bonus task, collected and analyzed IMU data from a lower-body exoskeleton under varying thigh strap tightness conditions (tight, slightly loose, very loose). Extracted time/frequency domain features, ran PCA visualization, and confirmed SVM distinguishability at 98.15% test accuracy — suggesting that strap tightness could be monitored automatically from sensor data.

---

## Takeaways

**Learned**: Action recognition pipeline, windowing techniques for temporal sensor data, BLE multi-device communication, SVM/ANN/CNN comparison on IMU data.

**Future directions**:
- Larger, more diverse dataset (age, gender, body type)
- IMU position estimation to improve Hook vs. Upper Cut separation
- Kalman filter with magnetometer to mitigate IMU drift
- Hardware fix: relocate arm IMUs (#2, #4) to reduce vibration

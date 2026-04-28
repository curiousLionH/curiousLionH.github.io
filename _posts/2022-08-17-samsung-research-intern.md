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
> **Keywords**: Action Recognition, Human-Robot Interaction (HRI)

---

## Overview

During the summer of 2022, I interned at **Samsung Research's Robot Center GEMS LAB**, where I developed an **IMU-based action recognition algorithm** for wearable robots. The goal was to classify boxing punch motions from wrist-worn IMU sensors — in real time — for deployment on SR's wearable robot platform.

---

## Target Motions

6 boxing punch types were chosen as recognition targets, covering both hands:

![Punch types overview](/assets/img/portfolio/samsung_punch_types.jpg)

Data was collected from **5 subjects**, **200 samples per class**.

---

## 5-Week Timeline

![Project timeline](/assets/img/portfolio/samsung_timeline.jpg)

---

## Data Acquisition

Two sensor setups were used — a wireless prototype board (Nicla Sense ME, BLE) for development, and the actual wearable robot's wired IMUs (EBIMU-9DOF, 5 sensors) for final validation.

![Data acquisition setup](/assets/img/portfolio/samsung_data_acq.jpg)

Collected signals: Acceleration (x,y,z), Gyroscope (x,y,z), Quaternion (x,y,z,w).

---

## Full System Pipeline

The complete classifier pipeline from raw sensor data to predicted label:

![Classifier model pipeline](/assets/img/portfolio/samsung_pipeline.jpg)

Key stages:
1. **Data Acquisition** — BLE/WiFi sensor logging
2. **Pre-processing** — EWMA smoothing → Peak finding → Windowing → Quaternion→Euler → Zero-out ends
3. **Data Augmentation** — Gaussian noise generation
4. **Feature Extraction** — Time domain, frequency domain, correlation (1,455 features total)
5. **Feature Selection** — t-test + PCA
6. **Classification** — SVM / ANN / CNN

---

## Pre-processing: EWMA Smoothing

The wearable robot's arm IMUs vibrate heavily due to imperfect body contact. An **Exponential Weighted Moving Average (EWMA)** filter was applied to smooth the signal before windowing.

![EWMA before/after comparison](/assets/img/portfolio/samsung_ewma.jpg)

The peaks become much cleaner and more consistent after smoothing.

---

## Feature Extraction

A total of **1,455 features** were extracted per window from time-domain, frequency-domain, and cross-sensor correlation statistics:

![Feature extraction summary](/assets/img/portfolio/samsung_feature_extract.jpg)

Feature selection used t-test p-value ranking to pick the top 50 (M1) or 100 (M2/M3) most discriminative features.

---

## Feature Selection: PCA Visualization

After selection, PCA confirms clear class separability for M1 (left vs. right), with more overlap in M2/M3 (individual punch types):

![PCA visualization of selected features](/assets/img/portfolio/samsung_pca.jpg)

---

## Recognition On-the-Fly

The real-time inference pipeline uses a dynamic threshold derived from a short reference log to continuously detect new punch events:

![Recognition on-the-fly pipeline](/assets/img/portfolio/samsung_on_the_fly.jpg)

---

## Results

| Model | Classifier | Test Accuracy |
|-------|-----------|---------------|
| M1 — Right vs. Left hand | SVM | **100%** |
| M2 — Right 3-class (RS/RH/RU) | SVM | **100%** |
| M3 — Left 3-class (LS/LH/LU) | SVM | 77.78% |
| M2/M3 | CNN | 61–77% |
| One-hand triple (ANN) | ANN | 94.44% |

Model 2/3 CNN results and cross-validation:

![CNN model results](/assets/img/portfolio/samsung_model_results.jpg)

SVM significantly outperformed CNN here — the feature-engineered input is better suited to kernel methods than convolution over raw sequences.

---

## Takeaways

- Learned the full action recognition pipeline: data collection → preprocessing → feature engineering → model selection
- Hands-on experience with BLE multi-device communication using Python `asyncio`
- SVM with well-engineered features beat CNN on small, structured IMU datasets
- Key limitation: Hook vs. Upper Cut are geometrically similar — position estimation (not just orientation) would likely improve discrimination

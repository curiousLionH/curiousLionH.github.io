---
layout: post
title: "A-Pillar Blind Spot Visibility System — Gold Award (KSAE)"
date: 2021-12-01
categories: project
tags: [computer-vision, depth-camera, mediapipe, autonomous-driving, HEVEN]
math: true
---

> **Competition**: University Student Self-Made Car Contest — Technical Idea Category  
> **Award**: Gold Award — Korean Society of Automotive Engineers (KSAE), Dec 2021  
> **Team**: SKKU HEVEN  
> **Role**: System design, depth camera perception, eye-coordinate algorithm

---

## Overview

![Project poster](/assets/img/portfolio/apillar_poster.jpg)

---

## Motivation

At signalized intersections in Korea, **711 pedestrian accidents** occurred during turns — resulting in 26 deaths and 719 injuries. A major contributing factor: the **A-pillar blind spot**.

The A-pillar (the column between the windshield and front side window) must be thick to protect the driver in a collision. This creates an unavoidable blind spot at exactly the angle where pedestrians appear during left/right turns.

**Goal**: Show the occluded view *through* the A-pillar, in real time, calibrated to the driver's actual eye position.

---

## System Architecture

```
Depth Camera → Mediapipe (eye coordinates) ─┐
                                            ├─→ Computer → LCD on A-pillar
Web Camera (wide-angle outside view) ──────┘
```

| Component | Role |
|-----------|------|
| **Depth Camera** | Reconstructs 3D point cloud; localizes driver's eye in space |
| **Mediapipe** | Detects facial landmarks in RGB image, extracts eye coordinates |
| **Web Camera** | Captures wide-angle exterior view |
| **Computer** | Computes crop region based on eye–LCD geometry |
| **LCD** | Mounted on A-pillar; displays cropped and depth-scaled exterior image |

---

## Algorithm

The key insight: the correct crop region in the webcam image depends on **where the driver's eye is relative to the LCD** at any moment. As the driver's head moves, the displayed region updates accordingly.

**Horizontal offset** (from front-view geometry):

$$
\text{Crop\_Pixel\_y} = \left( \sqrt{\frac{\text{Eye\_to\_LCD\_y}}{\text{Avg(Eye\_to\_LCD\_y)}}} - 1 \right) \times 2560
$$

**Depth scaling** (from side-view geometry):

$$
\text{magnification\_z} = \frac{\text{Avg(Eye\_to\_LCD\_z)}}{\text{Eye\_to\_LCD\_z}}
$$

The webcam image is cropped at the computed offset and resized by `magnification_z`, so the display always shows exactly what the eye line intersects on the other side of the pillar.

---

## Demo

The system was demonstrated in a stationary car setup. When the LCD is OFF, the A-pillar fully blocks the view. When ON, the correct exterior region is displayed in real time as the driver's head moves.

---

## Expected Impact

- Accident prevention through accurate blind spot recovery
- A-pillar thickness no longer constrained by visibility — safer crash structure possible
- Compatible with existing in-vehicle display technology

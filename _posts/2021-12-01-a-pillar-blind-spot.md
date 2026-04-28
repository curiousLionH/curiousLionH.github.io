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

## Motivation

At signalized intersections in Korea, **711 pedestrian accidents** occurred during left/right turns — resulting in 26 deaths and 719 injuries. A major contributing factor: driver inattention, often caused by the **A-pillar blind spot**.

The A-pillar (the structural column between the windshield and front side window) is deliberately thick to protect the driver during a collision. This creates an unavoidable blind spot at exactly the angle where pedestrians appear during turns.

**Goal**: Show the occluded view *through* the A-pillar in real time, calibrated to the driver's actual eye position.

---

## System Architecture

```
Depth Camera → Mediapipe (eye coordinates) ─┐
                                            ├─→ Computer → LCD on A-pillar
Web Camera (wide-angle outside view) ──────┘
```

| Component | Role |
|-----------|------|
| **Depth Camera** | Reconstructs 3D environment as point cloud; localizes driver's eye position |
| **Mediapipe** | Detects facial landmarks in RGB image, extracts eye coordinates |
| **Web Camera** | Captures wide-angle view of the car's exterior |
| **Computer** | Computes crop region based on eye–LCD spatial relationship |
| **LCD** | Mounted on A-pillar; displays the cropped and resized exterior image |

---

## Algorithm

### Eye-to-LCD Geometry

The system continuously estimates where the driver is looking *through* the A-pillar by computing the relative position between the eye and the LCD surface.

**Horizontal crop** (front-view geometry):

$$
\text{Eye\_to\_LCD\_y} = \left| \text{LCD}_y - \text{Eye}_y \right|
$$

$$
\text{Crop\_Pixel\_y} = \left( \sqrt{\frac{\text{Eye\_to\_LCD\_y}}{\text{Avg(Eye\_to\_LCD\_y)}}} - 1 \right) \times 2560
$$

**Depth scaling** (side-view geometry):

$$
\text{Eye\_to\_LCD\_z} = \left| \text{LCD}_z - \text{Eye}_z \right|
$$

$$
\text{magnification\_z} = \frac{\text{Avg(Eye\_to\_LCD\_z)}}{\text{Eye\_to\_LCD\_z}}
$$

The webcam image is cropped at the computed pixel offset and resized by `magnification_z`, so the displayed region always corresponds to exactly what the driver's eye line intersects on the other side of the pillar.

### Implementation

```python
# Pseudocode for the core crop computation
eye_pos = mediapipe_face_mesh(rgb_frame)          # [x, y, z] in depth space
lcd_pos = get_lcd_position_in_depth_space()       # calibrated constant

eye_to_lcd_y = abs(lcd_pos[1] - eye_pos[1])
crop_y = (sqrt(eye_to_lcd_y / avg_eye_to_lcd_y) - 1) * 2560

eye_to_lcd_z = abs(lcd_pos[2] - eye_pos[2])
scale = avg_eye_to_lcd_z / eye_to_lcd_z

cropped = webcam_frame[crop_y : crop_y + window_h, :]
display = cv2.resize(cropped, None, fx=scale, fy=scale)
lcd.show(display)
```

---

## Demo

The system was demonstrated in a stationary car setup:
- **OFF state**: A-pillar fully occludes the pedestrian-side view
- **ON state**: LCD shows the correctly cropped and depth-compensated exterior view, matching what the driver would see if the pillar were transparent

The displayed view updates in real time as the driver's head moves, maintaining geometric consistency.

---

## Expected Impact

- **Accident prevention**: correct sight line recovery at exactly the blind spot angle
- **Design freedom**: A-pillar thickness no longer constrained by visibility requirements
- **Integration path**: compatible with existing in-vehicle display technology

---

## Award

Received the **Gold Award (1st Place, Technical Idea Category)** at the 2021 University Student Self-Made Car Contest, hosted by the Korean Society of Automotive Engineers (KSAE).

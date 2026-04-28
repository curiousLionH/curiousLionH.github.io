---
layout: post
title: "Smart PikaPiCar — Autonomous Driving Car (Dean's Award, 1st Place)"
date: 2022-11-01
categories: project
tags: [autonomous-driving, line-tracing, arduino, embedded, HEVEN]
math: false
---

> **Competition**: Smart Car Design and Racing Competition  
> **Award**: Dean's Award (1st Place) — SKKU College of Information and Communication Engineering (Nov 2022)  
> **Team**: Group 12 — Lee Joohyun (Leader), Jeong Junhwan, Baek Woojung  
> **Role**: Team Leader, Software & Hardware Design

---

## Concept

Driving is exhausting — especially on long road trips. **Smart PikaPiCar** is an autonomous driving car designed so that everyone in the car, including the driver, can fully enjoy the journey.

The project combined the Pikachu character concept with autonomous driving:
- **Hardware**: Pikachu-shaped body — the car *is* the driver's alter ego
- **Software**: Plays Pokémon music while driving — the journey itself is part of the trip

---

## Hardware

The car body was **designed in Autodesk Inventor** and **3D-printed**, then hand-painted with acrylic paint to achieve the Pikachu look — ears, lightning bolt tail, cheek blushes, and Pokéball wheels.

Sensors on the chassis:
- Infrared (IR) line sensors — for lane tracking and stop line detection
- Ultrasonic sensors — for lateral distance keeping

---

## Software

### 1. Stable Line Tracing

The core driving algorithm uses consecutive detection counts rather than a single-frame decision to avoid false turns.

```
if (consecutive right-lane detections ≥ threshold):
    reverse in opposite direction
elif (right lane detected):
    turn left; right_count++; reset left_count
elif (left lane detected):
    turn right; left_count++; reset right_count
else:
    reset both counts; go straight
```

When turning, the inner wheel runs at `motor_output × 0.6` for smooth arcs.

### 2. Stop Line Detection

Two conditions must both pass:
1. **Cooldown check**: at least 1.7 s since the last stop (prevents double-counting)
2. **Count threshold**: both IR sensors detect white simultaneously for more than 5 frames

```
if (time_since_last_stop < 1.7s): not a stop line
if (both sensors white): count++
if (count > 5): STOP LINE DETECTED
```

### 3. Parallel Parking

Uses the ultrasonic sensor to maintain a target lateral distance from the wall:

```
if (stopped or sensor invalid):    steering = 0
elif (current - target > 10):      steering = +1  (rotate right)
elif (current - target < -10):     steering = -1  (rotate left)
else:                              steering = 0   (parallel)
```

### 4. Melody Playback

Two Pokémon songs play in a loop during driving — encoded as note arrays and played via a piezo speaker using Arduino's `tone()` function, interleaved with the main control loop using `millis()` for non-blocking playback.

Songs: *Route 201* and *We Are All Friends* (Pokémon OST)

---

## Result

The car successfully completed the full autonomous circuit — lane following, stop line detection, and parallel parking — while playing music. The design and technical implementation earned **1st Place (Dean's Award)** at the SKKU Smart Car Design and Racing Competition.

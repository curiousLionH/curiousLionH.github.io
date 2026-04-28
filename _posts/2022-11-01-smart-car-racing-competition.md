---
layout: post
title: "Smart PikaPiCar — Autonomous Driving Car (Dean's Award, 1st Place)"
date: 2022-11-01
categories: project
tags: [autonomous-driving, line-tracing, arduino, embedded, HEVEN]
math: false
---

> **Competition**: Smart Car Design and Racing Competition  
> **Award**: Dean's Award (1st Place) — SKKU College of Information and Communication Engineering, Nov 2022  
> **Team**: Group 12 — Lee Joohyun (Leader), Jeong Junhwan, Baek Woojung  
> **Role**: Team Leader, Software & Hardware Design

---

## Concept

Driving is exhausting — especially on long road trips. **Smart PikaPiCar** is an autonomous driving car designed so that everyone, including the driver, can fully enjoy the journey.

The concept fuses an autonomous vehicle with the Pikachu character:

![Concept diagram](/assets/img/portfolio/smartcar_concept.jpg)

- **Hardware**: Pikachu-shaped body — the car *is* the driver's alter ego, taking the wheel so the driver can relax
- **Software**: Plays Pokémon music during the ride — the journey itself becomes part of the trip

---

## The Car

The exterior was designed in **Autodesk Inventor**, 3D-printed, and hand-painted with acrylic to achieve the full Pikachu look — ears, lightning bolt tail, cheek blushes, and Pokéball wheels.

![Car exterior — three angles](/assets/img/portfolio/smartcar_car_exterior.jpg)

---

## Design & Manufacturing Process

![CAD model and painting process](/assets/img/portfolio/smartcar_cad_process.jpg)

---

## Software: Stable Line Tracing

The lane-following algorithm uses **consecutive detection counts** rather than single-frame decisions to avoid jitter and false turns. When cornering, the inner wheel runs at reduced output (×0.6) for smooth arcs.

![Line tracing flowchart](/assets/img/portfolio/smartcar_line_tracing.jpg)

---

## Software: Stop Line Detection

Two conditions must both pass to trigger a stop:
1. **Cooldown** — at least 1.7 s since the last stop (prevents double-counting)
2. **Count threshold** — both sensors detect white simultaneously for >5 consecutive frames

![Stop line detection flowchart](/assets/img/portfolio/smartcar_stop_line.jpg)

---

## Software: Parallel Parking

The ultrasonic sensor measures lateral distance to the wall. The car steers to maintain a target gap, correcting continuously:

![Parallel parking flowchart](/assets/img/portfolio/smartcar_parallel.jpg)

---

## Software: Melody Playback

Two Pokémon songs (*Route 201* and *We Are All Friends*) play on a loop via a piezo speaker using Arduino's `tone()`, interleaved with the control loop using `millis()` for non-blocking playback.

---

## Result

The car completed the full circuit — lane following, stop line detection, and parallel parking — while playing music, earning **1st Place (Dean's Award)** at the SKKU Smart Car Design and Racing Competition.

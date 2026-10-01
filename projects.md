---
layout: page
title: Projects
permalink: /projects/
---

# Projects

`git branch -a` — selected engineering and research projects. More write-ups live on the [blog](/blog/).

<div class="project-grid">
{% comment %}EvoReg detail dialog on hold until acceptance. To restore, swap this opening tag back in, then uncomment "View details" and the dialog below:
<article class="project-card project-card--open" data-project="evoreg" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-evoreg">
{% endcomment %}
<article class="project-card">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/evoreg_pipeline.jpg' | relative_url }}" alt="EvoReg architecture overview (paper Figure 1)" loading="lazy"></figure>
<span class="kicker">Master's Project · ICLR 2027 (under review)</span>
<h3>EvoReg — Point Cloud Registration</h3>
<p>Unified multi-stage framework for rigid and non-rigid registration, robust to noise, partial overlap, and deformation.</p>
{% comment %}<span class="project-card__more">View details</span>{% endcomment %}
</article>
<article class="project-card">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/robotaxi.jpg' | relative_url }}" alt="Hyundai IONIQ 5 robotaxi with roof-mounted LiDAR and sensor pods" loading="lazy"></figure>
<span class="kicker">Hyundai Motor Company · Research Engineer</span>
<h3>Perception &amp; Tracking for Autonomous Driving</h3>
<p>Camera-based and end-to-end 3D multi-object tracking frameworks, a custom tracking-performance evaluation pipeline, and a CUDA-based LiDAR interface in Python for high-throughput LiDAR data processing. Camera/LiDAR tracking and evaluation work shipped in Hyundai's autonomous-driving model, <a href="https://www.youtube.com/watch?v=-7BEzmdrlcU" target="_blank" rel="noopener">Atria AI</a>; the CUDA LiDAR interface supports the perception stack behind Hyundai's <a href="https://www.hyundaimotorgroup.com/ko/story/CONT0000000000002058" target="_blank" rel="noopener">RoboTaxi</a>.</p>
</article>
<article class="project-card project-card--open" data-project="lidar-mot" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-lidar-mot">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/lidar_mot_thumb.jpg' | relative_url }}" alt="Top-down LiDAR point cloud with clustered objects and their bounding boxes" loading="lazy"></figure>
<span class="kicker">Research Co-op · AMLAB</span>
<h3>3D LiDAR-Based Multi-Object Tracking</h3>
<p>3D MOT for autonomous-vehicle perception, run on logged ROS 2 bag data — RANSAC ground removal, voxel downsampling, DBSCAN clustering, and a Kalman + Hungarian tracker.</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card project-card--open" data-project="delivery-robot" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-delivery-robot">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/delivery_thumb.jpg' | relative_url }}" alt="RTAB-Map point-cloud map of an indoor floor with the robot's localized trajectory" loading="lazy"></figure>
<span class="kicker">Robotics · S-HERO Program · Excellence Award</span>
<h3>Indoor Autonomous Delivery Robot</h3>
<p>Errand robot for nursing homes — RTAB-Map SLAM with an RGB-D camera, ROS waypoint-tracking navigation that stops for people, and a scissor-lift storage module, validated in Gazebo.</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card project-card--open" data-project="sim-drone" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-sim-drone">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/drone_thumb.jpg' | relative_url }}" alt="Drone racing course placed inside a point-cloud map of a real campus courtyard" loading="lazy"></figure>
<span class="kicker">Student Creative Research · Minister of Science and ICT Award</span>
<h3>Simulation Drone Competition</h3>
<p>Realistic drone simulator on Unreal Engine + AirSim + PX4 — outdoor maps reconstructed with RTAB-Map and dynamic-object removal, motor-vibration and depth-noise models — used to host manual and autonomous drone races.</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card project-card--open" data-project="wearable" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-wearable">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/samsung_thumb.jpg' | relative_url }}" alt="The six boxing punches recognized: straight, hook, and uppercut for each hand" loading="lazy"></figure>
<span class="kicker">Samsung Research · Intern</span>
<h3>Wearable-Robot Action Recognition</h3>
<p>Real-time boxing-motion recognition from wrist-worn IMUs for a wearable robot — EWMA smoothing, feature engineering, and SVM classification (up to 100% test accuracy).</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card project-card--open" data-project="smart-car" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-smart-car">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/smartcar_thumb.jpg' | relative_url }}" alt="Smart PikaPiCar, a 3D-printed Pikachu-shaped autonomous car, from the front and side" loading="lazy"></figure>
<span class="kicker">Competition · Dean's Award (1st Place)</span>
<h3>Smart Car Design &amp; Racing</h3>
<p>Team-led design and driving-algorithm development for an autonomous small vehicle.</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card project-card--open" data-project="a-pillar" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-a-pillar">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/apillar_thumb.jpg' | relative_url }}" alt="A-pillar display off and on: when on, it shows the traffic cone hidden behind the pillar" loading="lazy"></figure>
<span class="kicker">Competition · Gold Award (KSAE)</span>
<h3>A-Pillar Blind-Spot System</h3>
<p>Depth-camera + eye-tracking setup that renders the driver's-perspective view to visually "remove" the A-pillar blind spot.</p>
<span class="project-card__more">View details</span>
</article>
</div>

<div class="project-modals">
{% comment %}EvoReg dialog — on hold until acceptance.
<dialog class="project-modal" id="project-evoreg" aria-labelledby="project-evoreg-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">Master's Project · Georgia Tech HAAG · Aug 2025 – Present</span>
<h2 id="project-evoreg-title">EvoReg: Versatile and Robust Point Cloud Registration via Multi-Stage Alignment</h2>
<ul class="project-modal__meta">
<li>ICLR 2027 · under review</li>
<li>Advisors: Dr. Supratik Mukhopadhyay, Dr. Nick Lytle</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>Learned point cloud registration has split into specialized pipelines: methods are built for either rigid or non-rigid alignment, and for either pose-supervised or self-supervised training. EvoReg covers all four (rigid / non-rigid) &times; (supervised / self-supervised) settings with <strong>one architecture</strong>. It does this through <strong>staged decoupling</strong>: global search, local refinement, and deformation are split into stages that run in sequence. Each stage passes a tighter initialization to the next, so every later module solves an easier subproblem.</p>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/evoreg_pipeline.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/evoreg_pipeline.jpg' | relative_url }}" alt="EvoReg architecture: CMA-ES pre-alignment, iterative Sinkhorn–Kabsch SVD, rigid MLP head, conditional-VAE deformation field, and inference-time refinements" loading="lazy"></a>
<figcaption>Full pipeline, from the input pair through four learned stages to the optional inference-time refinements.</figcaption>
</figure>

<h3>Pipeline</h3>
<ul>
<li><strong>Stage 0: gradient-free pre-alignment.</strong> A CMA-ES search over SE(3) minimizes a Chamfer-style distance. It gives a pose-agnostic starting point that handles large rotations and does not depend on any learned stage.</li>
<li><strong>Stage 1: iterative soft correspondence.</strong> PointNet features are matched with Sinkhorn-normalized cosine similarity. A confidence-weighted Kabsch SVD then refines the pose over three iterations, with a cycle-consistency constraint.</li>
<li><strong>Stage 2: residual rigid head.</strong> An MLP predicts a small corrective rotation (6D representation) and translation.</li>
<li><strong>Stage 3: conditional VAE deformation.</strong> A residual non-rigid displacement field is predicted on the already-aligned source, so the deformation network never has to absorb large pose errors.</li>
<li><strong>Inference-time refinements (training-free).</strong> Four optional modules trade compute for accuracy without retraining: concentrated SE(3) search, point-space DDPM denoising, and global and per-point Sinkhorn test-time optimization.</li>
</ul>
<p>The four training settings share the architecture and differ only in which loss terms and augmentations are active. The self-supervised variants drop pose supervision and learn from geometric losses alone.</p>

<h3>Evaluation</h3>
<ul>
<li>Trained <strong>only on ModelNet40</strong>. Evaluated on ModelNet40, ShapeNet-13, 3DMatch (real indoor RGB-D fragments), and FAUST (articulated human bodies) under controlled and real-world protocols.</li>
<li>Compared against <strong>16 rigid</strong> baselines (including GeoTransformer, RoITr, Predator, RPMNet, DCP, and TEASER++) and <strong>4 non-rigid</strong> baselines (CPD, BCPD, NDP, and DefTransNet). All methods were scored with an identical pipeline.</li>
<li>Among tested baselines, EvoReg had the best Chamfer Distance and Earth Mover's Distance in every evaluation cell. It reached perfect or near-perfect Chamfer Distance Recall in all four settings.</li>
</ul>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/evoreg_stages.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/evoreg_stages.jpg' | relative_url }}" alt="Stage-by-stage alignment of a ModelNet40 example, ending in a near-zero error map" loading="lazy"></a>
<figcaption>Stage-by-stage alignment of a ModelNet40 example (rigid, self-supervised variant). The moving source (blue) converges onto the fixed target (orange).</figcaption>
</figure>

<h3>My role</h3>
<p>I contributed throughout the project: model architecture design, the baseline evaluation pipeline, inference optimization, and manuscript preparation.</p>
</div>
</dialog>
{% endcomment %}

<dialog class="project-modal" id="project-lidar-mot" aria-labelledby="project-lidar-mot-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">Research Co-op · Vehicle Systems Lab (AMLAB), Sungkyunkwan Univ. · Dec 2021 – Feb 2022</span>
<h2 id="project-lidar-mot-title">3D LiDAR-Based Multi-Object Tracking</h2>
<ul class="project-modal__meta">
<li>Team of 3</li>
<li>Python · Open3D · ROS 2 (rosbag)</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>An autonomous vehicle needs the position and size of surrounding objects, and how they are moving, to plan and control. In this eight-week winter co-op, our team built a rule-based multi-object tracker for 3D LiDAR point clouds, developed and evaluated offline on driving data logged as ROS 2 bags. It was planned as the LiDAR branch of a late-fusion design: camera and LiDAR are tracked separately and their results are fused afterwards.</p>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/lidar_mot_pipeline.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/lidar_mot_pipeline.jpg' | relative_url }}" alt="Pipeline: 3D LiDAR point clouds go through detection (ground removal, segmentation, bounding box) and tracking (data association, state estimation, track management)" loading="lazy"></a>
<figcaption>Overall pipeline: detection turns raw point clouds into object boxes, and tracking links those boxes over time.</figcaption>
</figure>

<h3>Detection</h3>
<ul>
<li><strong>Ground removal.</strong> RANSAC plane fitting removes ground points. Without this step the road merges with nearby objects, and only a few vehicles could be tracked.</li>
<li><strong>Segmentation.</strong> Voxel downsampling reduces the point count, and DBSCAN density clustering groups the remaining points into objects.</li>
<li><strong>Bounding boxes.</strong> Each cluster's convex hull is fitted with a minimum-area rectangle, which gives the object's center, size, and heading.</li>
<li><strong>Filtering.</strong> Clusters that are not vehicles, such as street trees, curbs, and flower beds, are discarded using thresholds on top-view area, length-to-width ratio, and point density.</li>
</ul>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/lidar_mot_ground_removal.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/lidar_mot_ground_removal.jpg' | relative_url }}" alt="Clustered point cloud before and after ground removal" loading="lazy"></a>
<figcaption>Before (left) and after (right) ground removal. Once the road surface is gone, many more vehicles are separated into their own clusters and boxes.</figcaption>
</figure>

<div class="project-modal__split">
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/lidar_mot_min_rect.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/lidar_mot_min_rect.jpg' | relative_url }}" alt="Minimum-area rectangle fitted around a convex hull" loading="lazy"></a>
<figcaption>Minimum-area rectangle on a cluster's convex hull.</figcaption>
</figure>
<div>
<h3>Tracking</h3>
<ul>
<li><strong>Data association.</strong> Existing tracks are matched to new detections by linear sum assignment (Hungarian method). The cost combines displacement, heading change, and size change. Pairs too far apart are gated out, and a match is accepted only below a cost threshold.</li>
<li><strong>State estimation.</strong> A constant-velocity Kalman filter predicts each box center and corrects it with the new measurement. This gives a smoothed position and velocity for every track.</li>
<li><strong>Box tracking.</strong> Each track ID keeps its best box observed so far, scored by point density. This steadies box size when an object is only partly visible.</li>
</ul>
</div>
</div>

<h3>Results</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/lidar_mot_result.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/lidar_mot_result.jpg' | relative_url }}" alt="Tracked boxes in the point cloud, a plot of velocity vectors, and a log of track IDs with box centers and relative velocities" loading="lazy"></a>
<figcaption>Tracker output: tracked boxes (left), estimated velocity vectors (center), and per-track box centers and relative velocities (right).</figcaption>
</figure>
<p>Detection and track creation worked reliably: each object received a persistent track ID with its position and velocity. Association was the weak point. LiDAR geometry alone was often not enough to tell whether two detections were the same object. The next steps we proposed were camera detection with YOLOv5, camera–LiDAR calibration to fuse the two, and an IMM-JPDA-UKF tracker.</p>

<h3>My role</h3>
<p>I set up the development environment and implemented and debugged most of the pipeline. My parts were ground removal, segmentation and clustering, the object filters, bounding-box improvements, the Kalman filter (shared with teammates), and the velocity-vector visualization.</p>
</div>
</dialog>

<dialog class="project-modal" id="project-a-pillar" aria-labelledby="project-a-pillar-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">KSAE University Student Self-Made Car Contest · Technical Idea · 2021</span>
<h2 id="project-a-pillar-title">A-Pillar Blind-Spot Visibility System</h2>
<ul class="project-modal__meta">
<li>Gold Award</li>
<li>Team HEVEN, Sungkyunkwan Univ.</li>
<li>Depth camera · MediaPipe</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>A car's A-pillars have to be thick to protect the occupants in a crash, but that thickness hides pedestrians at exactly the angle where they appear during turns. One news report counted 711 pedestrian accidents during turns at unsignalized intersections, with 26 deaths and 719 injuries. We built a system that makes the pillar "see-through": a display on the pillar shows the part of the outside view it hides, adjusted to where the driver's eyes are.</p>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/apillar_off_on.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/apillar_off_on.jpg' | relative_url }}" alt="Prototype display with the system off (blank screen) and on (showing the traffic cone hidden behind the pillar)" loading="lazy"></a>
<figcaption>Prototype from the driver's seat. Off (left): the pillar blocks the view. On (right): the display shows the traffic cone hidden behind it.</figcaption>
</figure>

<h3>System</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/apillar_system.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/apillar_system.jpg' | relative_url }}" alt="Data flow: depth camera, MediaPipe eye coordinates, computer cropping the webcam image, LCD on the A-pillar" loading="lazy"></a>
</figure>
<ul>
<li><strong>Depth camera</strong> facing the driver produces a point cloud of the cabin.</li>
<li><strong>MediaPipe</strong> finds the face in the RGB image and gives the 3D position of the driver's eyes.</li>
<li><strong>Webcam</strong> outside the pillar captures a wide-angle view of the scene.</li>
<li><strong>Computer</strong> uses the eye–pillar geometry to decide which part of the webcam image the pillar is hiding, and crops it.</li>
<li><strong>LCD</strong> mounted on the A-pillar shows the cropped image.</li>
</ul>

<h3>Viewpoint geometry</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/apillar_geometry.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/apillar_geometry.jpg' | relative_url }}" alt="Top, front, and side views of the eye-to-display geometry used to pick and resize the crop" loading="lazy"></a>
<figcaption>Top view (left), front view (center), and side view (right) of the crop geometry.</figcaption>
</figure>
<p>As the driver's head moves, the part of the scene hidden behind the pillar shifts. The system recomputes the crop every frame:</p>
<ul>
<li><strong>Crop position.</strong> The eye's offset from the display is compared with its average offset over a calibration period. The crop window is shifted by <code>Crop_Pixel_y = |√(Eye_to_LCD_y / Avg(Eye_to_LCD_y)) − 1| × 2560</code> pixels.</li>
<li><strong>Crop scale.</strong> Moving closer to or farther from the pillar changes how much of the scene it hides. The crop is resized by <code>magnification_z = √(Avg(Eye_to_LCD_z) / Eye_to_LCD_z)</code>.</li>
</ul>

<h3>Outcome</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/apillar_exhibit.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/apillar_exhibit.jpg' | relative_url }}" alt="Contest exhibit: project posters next to the car-frame prototype with the A-pillar display" loading="lazy"></a>
<figcaption>Our exhibit at the 2021 KSAE contest: posters and the car-frame prototype.</figcaption>
</figure>
<p>We demonstrated the system on a car-frame mock-up and won the Gold Award in the Technical Idea category. The display updated with the driver's head position and filled in the blind spot.</p>
<p>The idea would let the pillar be designed for crash safety without giving up visibility, and could build on displays already used in cars. For future work we proposed two directions: a display and mounting that stay safe in a collision, and a display that blends better with the view through the windshield and side window.</p>
<p><strong>My role:</strong> system design, depth-camera perception, and the eye-coordinate algorithm.</p>
</div>
</dialog>

<dialog class="project-modal" id="project-smart-car" aria-labelledby="project-smart-car-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">Smart Car Design &amp; Racing Competition · Sungkyunkwan Univ. · 2022</span>
<h2 id="project-smart-car-title">Smart PikaPiCar</h2>
<ul class="project-modal__meta">
<li>Dean's Award · 1st Place</li>
<li>Team leader · team of 3</li>
<li>Arduino · 3D printing</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>The concept was a self-driving car for road trips. Driving to a destination is tiring, and the driver often can't enjoy the trip. A car that drives itself lets everyone, including people who can't drive, enjoy the journey as part of the trip. We gave the car a Pikachu body: the car stands in for the driver, so it looks like one. It also plays music while it drives.</p>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/smartcar_photos.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/smartcar_photos.jpg' | relative_url }}" alt="The finished car from the front, side, and rear: yellow body with ears, tail, and Poké Ball wheels" loading="lazy"></a>
<figcaption>The finished car: front, side, and rear.</figcaption>
</figure>

<h3>Hardware</h3>
<p>We modeled the body in Autodesk Inventor, 3D-printed it, and hand-painted it with acrylics. It sits on a small chassis with line sensors at the front corners and ultrasonic sensors for distance.</p>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/smartcar_build.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/smartcar_build.jpg' | relative_url }}" alt="The body modeled in Autodesk Inventor, and the printed shell being painted" loading="lazy"></a>
<figcaption>CAD model (left) and painting the printed shell (right).</figcaption>
</figure>

<h3>Driving algorithms</h3>
<div class="project-modal__split">
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/smartcar_chassis_wall.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/smartcar_chassis_wall.jpg' | relative_url }}" alt="Chassis aligning alongside a wall, with ultrasonic distance readings to the wall shown as arrows" loading="lazy"></a>
<figcaption>Parallel parking: aligning with the wall using side ultrasonic readings.</figcaption>
</figure>
<div>
<ul>
<li><strong>Stable line tracing.</strong> Each line sensor keeps a count of consecutive detections instead of reacting to a single reading. A detection on one side turns the car the other way. In a turn the inner wheel runs at 0.6× the outer wheel's output for a smooth arc. If one side keeps detecting past a threshold, the car backs up in the opposite direction to recover.</li>
<li><strong>Stop line.</strong> A stop line counts only when both sensors see white for more than 5 consecutive readings. Detections within 1.7 s of the previous stop are ignored, so the same line is never counted twice.</li>
<li><strong>Parallel parking.</strong> For the parking mission, the car has to line up parallel to a wall. The side ultrasonic reading is compared with the previous one, and a change of more than 10 steers the car back until it runs parallel.</li>
<li><strong>Keep distance.</strong> The car compares the measured distance with a target. If the error is more than ±10, it steers to close the gap; otherwise it keeps straight.</li>
<li><strong>Melody.</strong> Two Pokémon songs play through a piezo buzzer with <code>tone()</code>. Playback is timed with <code>millis()</code>, so the music never blocks the control loop.</li>
</ul>
</div>
</div>

<h3>Outcome</h3>
<p>The car completed the course, including line tracing, stop lines, and the parallel-parking mission, while playing music. We won 1st place (Dean's Award).</p>
<p><strong>My role:</strong> team leader. I came up with the hardware design idea, the Pikachu body, and designed all of the car's software: line tracing, stop-line detection, parallel parking, distance keeping, and music playback.</p>
</div>
</dialog>

<dialog class="project-modal" id="project-delivery-robot" aria-labelledby="project-delivery-robot-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">S-HERO Engineering Program · Sungkyunkwan Univ. · Mar – Dec 2021</span>
<h2 id="project-delivery-robot-title">SLAM-Based Errand Robot for Nursing Homes</h2>
<ul class="project-modal__meta">
<li>Excellence Award</li>
<li>Software lead · team of 7</li>
<li>ROS Melodic · RTAB-Map · Gazebo</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>Korea's population is aging quickly, while nursing homes struggle to hire and keep care workers, many of whom are in their 50s and 60s. Our team set out to build an indoor robot that takes over routine errands, such as carrying supplies and bedding. We designed the storage-and-delivery hardware and the indoor driving software, and added safety behaviors suited to a building full of elderly residents. An industry mentor from WeGo Robotics advised the project.</p>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/delivery_rtabmap.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/delivery_rtabmap.jpg' | relative_url }}" alt="RTAB-Map 3D map of a university floor with the localized trajectory drawn in blue" loading="lazy"></a>
<figcaption>RTAB-Map mapping and localization on a university building floor. The blue line is the tracked trajectory.</figcaption>
</figure>

<h3>Mapping &amp; localization</h3>
<ul>
<li>An Intel RealSense D435i RGB-D camera and a Jetson Nano ran RTAB-Map on ROS Melodic. Building it for the Jetson's ARM architecture required adding several missing packages.</li>
<li>A virtual laser scan generated from depth produced a combined 3D map and 2D occupancy grid. The robot then localized against this saved map.</li>
<li>The first test site, a basement corridor of plain white walls, kept losing tracking. We judged it unrepresentative of a nursing home and moved to a more varied floor. There, mapping succeeded and localization never lost tracking on straight runs at walking speed. It lost tracking about 2 times in 10 on curves, so we planned to slow down in turns.</li>
</ul>

<h3>Navigation &amp; control</h3>
<div class="project-modal__split">
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/delivery_sw_arch.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/delivery_sw_arch.jpg' | relative_url }}" alt="Software architecture: mission.py passes global points and path to pathfinder.py, which passes speed, steer, and brake to control.py" loading="lazy"></a>
<figcaption>Software architecture.</figcaption>
</figure>
<div>
<ul>
<li><strong><code>mission.py</code></strong> stores each delivery scenario as a mission. A mission key selects the robot's goal and route.</li>
<li><strong><code>pathfinder.py</code></strong> follows the route's waypoints. It replans locally to account for how the platform's turning radius shifts the target during a turn.</li>
<li><strong><code>control.py</code></strong> sends speed, steering, and brake commands to the platform over serial. Steering is clamped to the platform's maximum angle.</li>
</ul>
</div>
</div>
<figure class="project-modal__fig project-modal__fig--narrow">
<a href="{{ '/assets/img/portfolio/delivery_flow.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/delivery_flow.jpg' | relative_url }}" alt="Driving loop: localization, trajectory pursuit, and an obstacle check that either waits or continues" loading="lazy"></a>
<figcaption>Driving loop: localize, follow the trajectory, and wait whenever an obstacle is detected.</figcaption>
</figure>
<p>Safety shaped the driving behavior. The robot drives slowly and keeps to the edge of the corridor, out of residents' way. Our first version steered around obstacles. After discussing it with our advisor, we changed it to <strong>stop and wait until the path clears</strong>, because a sudden swerve could startle or endanger people who react slowly.</p>

<h3>Hardware</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/delivery_hw_redesign.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/delivery_hw_redesign.jpg' | relative_url }}" alt="Storage module before and after redesign: a two-level frame with conveyor shelves and a central scissor lift with tilt" loading="lazy"></a>
<figcaption>Storage module before (left) and after (right) the redesign for manufacturability.</figcaption>
</figure>
<p>The upper module was inspired by Amazon's Kiva warehouse robots. It has a two-level frame with four storage bays and conveyor belts that move items to a central scissor lift. A tilt mechanism then slides the item out to the recipient, so no one has to reach in. We redesigned the frame from aluminum square tubing to avoid welding, and sized the linear actuator from torque calculations. The lower half is a small car platform supplied by our advisor's lab.</p>

<h3>Simulation &amp; outcome</h3>
<div class="project-modal__split">
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/delivery_gazebo.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/delivery_gazebo.jpg' | relative_url }}" alt="The robot model in Gazebo: the storage frame mounted on a wheeled base" loading="lazy"></a>
<figcaption>Combined robot model in Gazebo.</figcaption>
</figure>
<div>
<p>The supplied platform's motors never ran. The Jetson-to-Arduino link checked out over I2C and serial, but neither the servo nor the DC motor responded, and we could not find the fault. We therefore validated the algorithms in <strong>Gazebo</strong>. We built a map modeled on a campus building floor and attached our hardware's STL model to an ERP-42 base, with its center of mass and inertia computed from the mesh. Navigation used waypoint tracking with PID steering on the heading error and speed set by distance to the goal.</p>
<p>The team received an Excellence Award. WeGo Robotics planned to reuse our Gazebo environment for its own simulation testing.</p>
</div>
</div>

<h3>My role</h3>
<p>I led the robot's software end to end, from sensor preprocessing to planning. This covered the RealSense / LiDAR data pipeline and RTAB-Map mapping and localization on the Jetson Nano. It also covered the <code>mission</code> / <code>pathfinder</code> / <code>control</code> architecture, the waypoint-tracking and stop-and-wait obstacle logic, the serial interface to the platform, and the navigation used in the Gazebo validation.</p>
</div>
</dialog>

<dialog class="project-modal" id="project-sim-drone" aria-labelledby="project-sim-drone-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">Student Creative Research · Robotics &amp; Intelligent Systems (RISE) Lab, Sungkyunkwan Univ. · 2021</span>
<h2 id="project-sim-drone-title">Development of a Simulation Drone Competition Utilizing Realistic Environments and Drone Dynamics</h2>
<ul class="project-modal__meta">
<li>Minister of Science and ICT Award</li>
<li>Team of 6</li>
<li>Unreal Engine · AirSim · PX4 · ROS</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>COVID-19 made in-person events like the IROS autonomous drone race impossible, so drone research and competitions were moving into simulation. Existing simulators each had a gap. jMAVSim and Gazebo look unrealistic and give idealized sensor data. The DJI and DRL simulators are closed and don't support PX4 firmware. Unreal Engine with AirSim looks good and runs PX4, but outdoor scenes are hard to build and its physics are too clean. We closed those gaps and used the result to host real competitions.</p>

<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/drone_stadium.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/drone_stadium.jpg' | relative_url }}" alt="Simulated racing course placed in the center of a point-cloud map of a campus courtyard" loading="lazy"></a>
<figcaption>Racing course placed inside a reconstructed campus courtyard (about 35 × 35 m).</figcaption>
</figure>

<h3>Realistic environments</h3>
<ul>
<li><strong>Mapping real places.</strong> Instead of building maps by hand, we reconstructed outdoor spaces from an RGB-D camera with RTAB-Map. Its loop closure and graph optimization give dense point clouds, and its memory management scales to large outdoor areas. Poisson surface reconstruction then turned the point cloud into a mesh, filling holes for a more realistic scene. Maps reached about 70 × 35 m.</li>
<li><strong>Removing moving objects.</strong> People and cars walking through a scan degrade the map. We segmented them with Mask R-CNN and filled the gaps by Navier–Stokes inpainting. On the TUM dynamic sequences, this cut the time odometry was lost by <strong>28.1%</strong> compared with plain RTAB-Map.</li>
</ul>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/drone_mapping.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/drone_mapping.jpg' | relative_url }}" alt="Photo of a campus courtyard next to its point-cloud reconstruction" loading="lazy"></a>
<figcaption>Campus courtyard (left) and its RTAB-Map reconstruction (right).</figcaption>
</figure>

<h3>Realistic dynamics &amp; sensors</h3>
<ul>
<li><strong>Motor vibration.</strong> A real drone hovering outdoors shakes in roll and pitch, with angular-rate standard deviations of about 0.22 (x) and 0.24 (y). We added Gaussian noise to the simulated motor thrust, which produced 0.22 and 0.16, close to the real flight.</li>
<li><strong>Depth noise.</strong> Simulated depth cameras return perfect distances. We measured a RealSense D435 on plastic, cement, and foam board from 0.5 m to 10 m and found noise growing exponentially with distance. We modeled this with an adjustable exponent, plus random 1% dropouts to match the camera's fill-rate error.</li>
<li><strong>Sensors and calibration.</strong> The simulated drone carries cameras, altimeter, IMU, GPS, and LiDAR, with configurable image size, field of view, count, and placement. A checkerboard calibration map in Unreal Engine gives quick camera and camera–IMU intrinsics and extrinsics. ORB-SLAM2 visual odometry ran in the simulator on RGB-D input.</li>
</ul>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/drone_noise.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/drone_noise.jpg' | relative_url }}" alt="Pitch angular-rate plots of a real hovering drone and the simulated drone with thrust noise" loading="lazy"></a>
<figcaption>Pitch angular rate: real drone hovering outdoors (left) and simulated drone with thrust noise (right).</figcaption>
</figure>

<h3>Competitions</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/drone_race.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/drone_race.jpg' | relative_url }}" alt="Chase-camera view of the simulated drone flying between checkered walls on the course" loading="lazy"></a>
<figcaption>Chase-camera view during the manual race.</figcaption>
</figure>
<p>The stack used ROS throughout, PX4 through MAVROS for control, Unreal Engine for rendering, and AirSim to exchange data with the simulation. The 14-gate course was modeled on the 2017 IROS Autonomous Drone Racing arena.</p>
<ul>
<li><strong>Manual race (Sep 3, 2021).</strong> Pilots flew with an Xbox controller in first-person or chase view. Three pilots competed, and the winner cleared 13 of 14 gates. We logged controller inputs, position, velocity, acceleration, and collisions, collecting <strong>over 100 minutes</strong> of flight data for later reinforcement learning.</li>
<li><strong>Autonomous race (Sep 18, 2021).</strong> Teams connected over Wi-Fi and had 40 minutes each. They received RGB-D, altimeter, IMU, and magnetometer data, but no GPS. Three teams competed. The winner used ORB-SLAM2 visual odometry to fly gate to gate and cleared 13 gates in <strong>235 s</strong>.</li>
</ul>

<p>The project received the <strong>Minister of Science and ICT Award</strong>.</p>

<h3>My role</h3>
<p>I owned two parts of the project. The first was <strong>trajectory generation</strong>: computing smooth drone trajectories through the gates with the minimum-snap algorithm. The second was <strong>motor-vibration modeling</strong> in the realistic dynamics: I measured the real drone's hover vibration and reproduced it in the simulator with Gaussian thrust noise.</p>
</div>
</dialog>

<dialog class="project-modal" id="project-wearable" aria-labelledby="project-wearable-title">
<div class="project-modal__inner">
<header class="project-modal__head">
<span class="kicker">Samsung Research · Robot Center GEMS LAB · Jul – Aug 2022</span>
<h2 id="project-wearable-title">IMU-Based Action Recognition for a Wearable Robot</h2>
<ul class="project-modal__meta">
<li>University Student Intern</li>
<li>Action recognition · HRI</li>
</ul>
<button type="button" class="project-modal__close" aria-label="Close" autofocus>&times;</button>
</header>

<p>During a five-week internship, I built an algorithm that recognizes a user's motion from the IMUs on an upper-body wearable robot. The target was six boxing punches: straight, hook, and uppercut for each hand. The goal was real-time recognition that the robot could act on, for example with motor resistance or haptic feedback in a fitness game.</p>

<div class="project-modal__split">
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/samsung_imu_gloves.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/samsung_imu_gloves.jpg' | relative_url }}" alt="Wrist-mounted IMU boards on boxing gloves with their x, y, z axes marked" loading="lazy"></a>
<figcaption>Wrist-mounted IMUs used for data collection.</figcaption>
</figure>
<div>
<h3>Data</h3>
<ul>
<li><strong>Prototype sensors:</strong> two wireless Nicla Sense ME (BHI260AP) boards streamed data over BLE. I wrote a multi-device logger with Python <code>asyncio</code>.</li>
<li><strong>Robot sensors:</strong> five wired EBIMU-9DOF units on the wearable robot were logged at 100 Hz over Wi-Fi, by modifying the robot's Unity client.</li>
<li>5 subjects, 200 samples per class. Signals: acceleration, gyroscope, and quaternion.</li>
</ul>
</div>
</div>

<h3>Pipeline</h3>
<figure class="project-modal__fig">
<a href="{{ '/assets/img/portfolio/samsung_pipeline_diagram.jpg' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/portfolio/samsung_pipeline_diagram.jpg' | relative_url }}" alt="Classifier pipeline: data acquisition, pre-processing, augmentation, feature extraction, feature selection, grid search, and SVM / CNN models" loading="lazy"></a>
</figure>
<ul>
<li><strong>Pre-processing.</strong> EWMA smoothing suppresses vibration from loosely fitted arm IMUs. Each window is ~1 s, centered on a peak in wrist-direction acceleration, which marks one punch as one sample. Quaternions are converted to Euler angles, and window ends are zeroed out.</li>
<li><strong>Augmentation.</strong> New windows are created by adding Gaussian noise scaled to the sensor resolution, to offset the small dataset.</li>
<li><strong>Features.</strong> 1,455 per window: time-domain statistics, wavelet frequency-domain statistics, and roll / pitch / yaw correlations across sensors. A t-test ranking keeps the top 50–100 features, which are then checked with PCA.</li>
<li><strong>Models.</strong> SVMs tuned by grid search with k-fold cross-validation, plus a CNN on STFT spectrograms and an ANN for comparison.</li>
<li><strong>Recognition on the fly.</strong> A short calibration log sets a per-user peak threshold (minimum peak &times; 0.85). New punches are then detected and classified from the live stream.</li>
</ul>

<h3>Results</h3>
<div class="table-wrap">
<table>
<thead><tr><th>Task</th><th>Classifier</th><th>Test accuracy</th></tr></thead>
<tbody>
<tr><td>Left vs. right hand</td><td>SVM</td><td><strong>100%</strong> (also in real time)</td></tr>
<tr><td>Right straight / hook / uppercut</td><td>SVM</td><td><strong>100%</strong></td></tr>
<tr><td>Left straight / hook / uppercut</td><td>SVM</td><td>77.78%</td></tr>
<tr><td>One-hand, 3-class</td><td>ANN</td><td>94.44%</td></tr>
<tr><td>Right / left 3-class</td><td>CNN</td><td>61.11% / 77.78%</td></tr>
</tbody>
</table>
</div>
<p>On this small, structured dataset, SVMs on engineered features beat the CNN. Hooks and uppercuts were the hardest to separate because their wrist orientations are similar. IMU-based position estimation, and magnetometer-aided Kalman filtering to correct drift, were the main next steps I proposed.</p>
</div>
</dialog>
</div>

<script src="{{ '/assets/js/projects.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>

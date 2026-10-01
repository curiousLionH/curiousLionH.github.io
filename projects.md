---
layout: page
title: Projects
permalink: /projects/
---

# Projects

`git branch -a` — selected engineering and research projects. More write-ups live on the [blog](/blog/).

<div class="project-grid">
<article class="project-card project-card--open" data-project="evoreg" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-evoreg">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/evoreg_pipeline.jpg' | relative_url }}" alt="EvoReg architecture overview (paper Figure 1)" loading="lazy"></figure>
<span class="kicker">Master's Project · ICLR 2027 (under review)</span>
<h3>EvoReg — Point Cloud Registration</h3>
<p>Unified multi-stage framework for rigid and non-rigid registration, robust to noise, partial overlap, and deformation.</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card">
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
<article class="project-card">
<span class="kicker">Robotics · Capstone</span>
<h3>Indoor Autonomous Delivery Robot</h3>
<p>ROS-based delivery robot with depth-camera perception, Hector SLAM mapping, and TEB local planning for navigation in structured indoor spaces.</p>
</article>
<article class="project-card project-card--open" data-project="wearable" tabindex="0" role="button" aria-haspopup="dialog" aria-controls="project-wearable">
<figure class="project-card__media"><img src="{{ '/assets/img/portfolio/samsung_thumb.jpg' | relative_url }}" alt="The six boxing punches recognized: straight, hook, and uppercut for each hand" loading="lazy"></figure>
<span class="kicker">Samsung Research · Intern</span>
<h3>Wearable-Robot Action Recognition</h3>
<p>Real-time boxing-motion recognition from wrist-worn IMUs for a wearable robot — EWMA smoothing, feature engineering, and SVM classification (up to 100% test accuracy).</p>
<span class="project-card__more">View details</span>
</article>
<article class="project-card">
<span class="kicker">Competition · Dean's Award (1st Place)</span>
<h3>Smart Car Design &amp; Racing</h3>
<p>Team-led design and driving-algorithm development for an autonomous small vehicle.</p>
</article>
<article class="project-card">
<span class="kicker">Competition · Gold Award (KSAE)</span>
<h3>A-Pillar Blind-Spot System</h3>
<p>Depth-camera + eye-tracking setup that renders the driver's-perspective view to visually "remove" the A-pillar blind spot.</p>
</article>
</div>

<div class="project-modals">
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

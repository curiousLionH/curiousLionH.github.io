---
layout: home
title: Home
---

<p class="intro-line">joohyun@portfolio:~$ whoami<span class="blink">_</span></p>

<section id="about">
  <h2>about</h2>
  <p>
    I'm a Research Engineer working on <strong>3D perception, multi-sensor fusion, and
    multi-object tracking</strong> for autonomous vehicles at Hyundai Motor Company, and an
    M.S. student in Computer Science at Georgia Tech. My work spans calibration automation,
    CUDA-based LiDAR pipelines, and end-to-end tracking frameworks — with several patent
    applications in the autonomous-driving space.
  </p>
  <p>
    More detail: <a href="{{ '/about/' | relative_url }}">About</a> ·
    <a href="{{ '/backgrounds/' | relative_url }}">Backgrounds</a> ·
    <a href="{{ '/publications/' | relative_url }}">Publications</a> ·
    <a href="{{ '/projects/' | relative_url }}">Projects</a>
  </p>
</section>

<section id="research">
  <h2>research --interests</h2>
  <ul class="tags">
    <li>3D Perception</li>
    <li>LiDAR Processing</li>
    <li>Multi-Object Tracking</li>
    <li>Sensor Fusion</li>
    <li>Point Cloud Registration</li>
    <li>Diffusion / Generative 3D</li>
  </ul>
</section>

<section id="background">
  <h2>tail -f background.log</h2>
  <div class="entry-list">
    <div class="entry">
      <div class="entry__when">2024 — Present</div>
      <div class="entry__what"><strong>M.S. in Computer Science</strong>Georgia Institute of Technology, Atlanta, USA</div>
    </div>
    <div class="entry">
      <div class="entry__when">2023 — Present</div>
      <div class="entry__what"><strong>Research Engineer</strong>Hyundai Motor Company — Autonomous Driving Division</div>
    </div>
    <div class="entry">
      <div class="entry__when">2022</div>
      <div class="entry__what"><strong>Research Intern</strong>Samsung Research — Robot Center, GEMS Lab</div>
    </div>
    <div class="entry">
      <div class="entry__when">2018 — 2023</div>
      <div class="entry__what"><strong>B.S. in Mechanical Engineering</strong>Sungkyunkwan University, South Korea</div>
    </div>
  </div>
</section>

<section id="highlights">
  <h2>highlights</h2>
  <ul>
    <li>Patent applications in autonomous-driving calibration and object-tracking evaluation.</li>
    <li>Built CUDA-based LiDAR interfaces for high-throughput perception data processing.</li>
    <li>Designed camera-based end-to-end multi-object tracking frameworks.</li>
    <li>Master's project on diffusion-based coarse-to-fine 3D point cloud registration.</li>
  </ul>
</section>

<section id="posts">
  <h2>ls -t posts/</h2>
  <ul class="post-list">
    {% for post in site.posts limit:5 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="date">{{ post.date | date: "%Y.%m.%d" }}</span>
      </li>
    {% endfor %}
  </ul>
</section>

<section id="contact-home">
  <div class="callout">
    Open to research collaborations and engineering discussions —
    <a href="mailto:joohyun@gatech.edu">joohyun@gatech.edu</a>
  </div>
</section>

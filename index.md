---
layout: home
title: Home
---

<div class="profile-shell">
  <section class="hero-fancy" id="about">
    <div class="wrapper">
      <div class="reveal" data-reveal>
        <p class="eyebrow">Designy Research · 3D Perception</p>
        <h1 class="title">Joohyun Lee</h1>
        <p class="lead">I design perception systems for autonomous vehicles — merging clean product-minded interfaces with rigorous 3D research.</p>

        <div class="cta-group">
          <a class="pill" href="/about/">Profile</a>
          <a class="btn-ghost" href="/projects/">Projects</a>
          <a class="pill secondary" href="/publications/">Publications</a>
          <div class="social-icons">
            <a class="pill secondary" href="https://github.com/curiousLionH">GitHub</a>
            <a class="pill secondary" href="https://www.linkedin.com/in/joohyun-lee-2b3816125">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-grid" id="research">
    <section class="section-card">
      <h2>About</h2>
      <p>
        Research Engineer working on 3D perception, sensor fusion, and tracking for autonomous vehicles.
        See more: <a href="/about/">About</a> · <a href="/backgrounds/">Backgrounds</a> · <a href="/projects/">Projects</a>
      </p>
    </section>

    <section class="section-card">
      <h2>Research Interests</h2>
      <ul class="tag-list">
        <li>3D Perception</li>
        <li>LiDAR Processing</li>
        <li>Multi-Object Tracking</li>
        <li>Sensor Fusion</li>
        <li>Point Cloud Registration</li>
        <li>Generative 3D Models</li>
      </ul>
    </section>
  </div>

  <section class="section-card" id="background">
    <h2>Background</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="time">2024–Present</div>
        <div>
          <strong>M.S. in Computer Science</strong><br />
          Georgia Institute of Technology, Atlanta, USA
        </div>
      </div>
      <div class="timeline-item">
        <div class="time">2023–Present</div>
        <div>
          <strong>Research Engineer</strong><br />
          Hyundai Motor Company — Autonomous Driving Division
        </div>
      </div>
      <div class="timeline-item">
        <div class="time">2018–2023</div>
        <div>
          <strong>B.S. in Mechanical Engineering</strong><br />
          Sungkyunkwan University, South Korea
        </div>
      </div>
    </div>
  </section>

  <div class="showcase" id="highlights">
    <section class="section-card">
      <h2>Experience</h2>
      <ul>
        <li>Developed calibration automation software and perception system validation pipelines.</li>
        <li>Built CUDA-based LiDAR interfaces for high-throughput data processing.</li>
        <li>Designed camera-based end-to-end multi-object tracking frameworks.</li>
        <li>Worked on 3D perception and sensor-fusion solutions for autonomous driving.</li>
      </ul>
    </section>

    <section class="section-card">
      <h2>Highlights</h2>
      <ul>
        <li>Patent applications in autonomous driving calibration and object tracking evaluation.</li>
        <li>Master’s project on diffusion-based 3D point cloud registration.</li>
        <li>Research on LiDAR perception and autonomous delivery robotics.</li>
        <li>Awards across engineering competitions and research programs.</li>
      </ul>
    </section>
  </div>

  <section class="section-card" id="posts">
    <h2>Recent Posts</h2>
    <ul class="post-list">
      {% for post in site.posts limit:4 %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span>{{ post.date | date: "%Y.%m.%d" }}</span>
        </li>
      {% endfor %}
    </ul>
  </section>

  <div class="contact-strip">
    <span>Available for research collaborations and engineering discussions.</span>
    <div>
      <a href="mailto:joohyun@gatech.edu">joohyun@gatech.edu</a>
      ·
      <a href="/about/">Profile</a>
    </div>
  </div>
</div>


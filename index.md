---
layout: home
title: Home
---

<div class="changelog-intro">
  <h1>Changelog</h1>
  <p>All notable changes to this career are documented on this page. Format loosely follows
  <a href="https://keepachangelog.com/" target="_blank" rel="noopener">Keep a Changelog</a>;
  versioning is best-effort <a href="https://semver.org/" target="_blank" rel="noopener">SemVer</a>.
  Breaking changes are, regrettably, undocumented.</p>
</div>

<section id="about">
  <h2>About</h2>
  <p>
    I'm a Research Engineer working on <strong>3D perception, multi-sensor fusion, and
    multi-object tracking</strong> for autonomous vehicles at Hyundai Motor Company, and an
    M.S. student in Computer Science at Georgia Tech. Work spans calibration automation,
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

<section id="branches">
  <h2>Branches</h2>
  <ul class="tags">
    <li>research/3d-perception</li>
    <li>research/lidar-processing</li>
    <li>research/multi-object-tracking</li>
    <li>research/sensor-fusion</li>
    <li>research/point-cloud-registration</li>
    <li>research/generative-3d</li>
  </ul>
</section>

<section id="history">
  <h2>History</h2>
  <div class="gitlog">
    <div class="commit commit--head">
      <div class="commit__head">
        <span class="commit__hash">a3f9c21</span>
        <span class="commit__title">M.S. in Computer Science</span>
        <span class="commit__date">2024-08</span>
      </div>
      <div class="commit__body">Georgia Institute of Technology — Atlanta, USA</div>
      <div class="commit__refs">
        <span class="ref">HEAD &rarr; main</span>
        <span class="ref ref--tag">tag: grad-school</span>
      </div>
    </div>
    <div class="commit">
      <div class="commit__head">
        <span class="commit__hash">7b2e044</span>
        <span class="commit__title">Research Engineer</span>
        <span class="commit__date">2023-01</span>
      </div>
      <div class="commit__body">Hyundai Motor Company — Autonomous Driving Division</div>
      <div class="commit__refs"><span class="ref ref--tag">tag: v-hyundai</span></div>
    </div>
    <div class="commit">
      <div class="commit__head">
        <span class="commit__hash">c1d8a90</span>
        <span class="commit__title">Research Intern</span>
        <span class="commit__date">2022-07</span>
      </div>
      <div class="commit__body">Samsung Research — Robot Center, GEMS Lab</div>
    </div>
    <div class="commit">
      <div class="commit__head">
        <span class="commit__hash">c81d9f3</span>
        <span class="commit__title">B.S. in Mechanical Engineering</span>
        <span class="commit__date">2018-03</span>
      </div>
      <div class="commit__body">Sungkyunkwan University — South Korea</div>
      <div class="commit__refs"><span class="ref ref--tag">tag: init</span></div>
    </div>
  </div>
</section>

<section id="releases">
  <h2>Releases</h2>
  <div class="releases">
    <div class="release">
      <span class="release__ver">v-patents</span>
      <ul>
        <li>Method and apparatus for evaluating object-tracking performance</li>
        <li>Data-processing system for AI + multi-sensor object detection</li>
        <li>Adaptive calibration system for autonomous driving</li>
      </ul>
    </div>
    <div class="release">
      <span class="release__ver">v-engineering</span>
      <ul>
        <li>CUDA-based LiDAR interfaces for high-throughput perception</li>
        <li>Camera-based end-to-end multi-object tracking frameworks</li>
        <li class="changed">Calibration automation and perception-system validation pipelines</li>
      </ul>
    </div>
    <div class="release">
      <span class="release__ver">v-research</span>
      <ul>
        <li>Diffusion-based coarse-to-fine 3D point cloud registration (M.S. project)</li>
        <li>LiDAR perception pipeline and 3D MOT for autonomous delivery robotics</li>
      </ul>
    </div>
  </div>
</section>

<section id="commits">
  <h2>Recent commits</h2>
  <ul class="commit-list">
    {% for post in site.posts limit:5 %}
    <li>
      <span class="h">blog/{{ post.categories | first | default: "note" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
    {% endfor %}
  </ul>
</section>

<section id="contributing">
  <div class="callout">
    <strong>Contributing</strong> &mdash; open to research collaborations and engineering
    discussions. Send a patch: <a href="mailto:joohyun@gatech.edu">joohyun@gatech.edu</a>
  </div>
</section>

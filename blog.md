---
layout: page
title: Blog
permalink: /blog/
---

# Blog

Reading notes, paper reviews, and engineering write-ups.

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%Y.%m.%d" }}</span>
  </li>
{% endfor %}
</ul>

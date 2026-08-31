---
layout: page
title: Blog
permalink: /blog/
---

# Blog

`git log blog/` — reading notes, paper reviews, and engineering write-ups.

<ul class="commit-list">
{% for post in site.posts %}
  <li>
    <span class="h">blog/{{ post.categories | first | default: "note" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
  </li>
{% endfor %}
</ul>

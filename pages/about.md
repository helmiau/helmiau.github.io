---
layout: page
title: About
permalink: /about/
weight: 3
---

<div class="row">
{% include landing.html %}
</div>

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
I am a college student of Imam Syafi'i Islamic College. I learn more about Islamic religion, currently I have a hobby and take a job as graphic designer, C# & Bash script shell coder.

<div class="row">
{% include about/skills.html title="Main Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>

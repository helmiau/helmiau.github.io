---
layout: page
title: About
permalink: /about
weight: 3
---

<p align="center">
  <a href="{{ site.baseurl }}">
    <img src="{{ site.author.image_about }}" alt="{{ site.title }}" width="168px" height="168px" style="display:flex;">
  </a>
<br>

Hi I am <b>{{ site.author.name }}</b> :wave:,<br>
I am a college student of <b>Imam Syafi'i Islamic College, Jember</b>. I learn more about Islamic religion and take more focus into <b>Hadeeth Science</b>, currently I have a hobby and take a job as <b>graphic designer, C# & Bash script shell coder</b>. Contact me below if you need a graphic designer or something else.
</p>

{% include social.html %}
<br>
<br>
### **My Skills**

<div class="row">
{% include about/skills.html title="Native Languages" source=site.data.native-languages %}
{% include about/skills.html title="Programming Languages" source=site.data.programming-skills %}
</div>
<div class="row">
{% include about/skills.html title="Microsoft Skills" source=site.data.microsoft-skills %}
{% include about/skills.html title="Google Skills" source=site.data.google-skills %}
</div>
<div class="row">
{% include about/skills.html title="Adobe Skills" source=site.data.adobe-skills %}
</div>
<div class="row">
{% include about/skills.html title="Affinity Skills" source=site.data.affinity-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

{% include about/timeline.html %}

<br>
<p align="center">
<small class="text-muted mb-2">
  I use <a href="https://github.com/YoussefRaafatNasry/portfolYOU">portfolYOU</a> theme for GitHub Pages.
</small>
</p>

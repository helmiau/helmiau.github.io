---
layout: page
title: About
permalink: /about/
weight: 3
---

<p align="center">
<img src="{{ site.author.image }}" alt="{{ site.title }}" width="40%" height="40%" style="display:flex;">
<br>
Hi I am <b>{{ site.author.name }}</b> :wave:,<br>
I am a college student of Imam Syafi'i Islamic College. I learn more about Islamic religion, currently I have a hobby and take a job as graphic designer, C# & Bash script shell coder. Contact me below if you need a graphic designer or something else.
</p>

<div style="display:flex; justify-content: center;">
  {%- assign unfocused_color = "6c757d" -%}
  {% for account in site.author %}
    {%- assign service_name = account[0] -%}
    {%- assign service_data = site.data.social-media[service_name] -%}
    {%- if service_data -%}    
    <a class="social mx-1"  href="{{ service_data.url }}{{ account[1] }}"
       style="color: #{{ unfocused_color }}"
       onMouseOver="this.style.color='#{{ service_data.color }}'"
       onMouseOut="this.style.color='#{{ unfocused_color }}'">
      <i class="{{ service_data.icon }} fa-1x"></i>
    </a>
    {%- endif -%}
  {% endfor %}
</div>
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

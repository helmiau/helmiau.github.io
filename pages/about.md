---
layout: page
title: About
permalink: /about/
weight: 3
---

{% include landing.html %}

## **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
I am a college student of Imam Syafi'i Islamic College. I learn more about Islamic religion, currently I have a hobby and take a job as graphic designer, C# & Bash script shell coder. Contact me below if you need a graphic designer or something else.

{% include social.html %}

I use GitHub Pages template theme <a href="https://github.com/YoussefRaafatNasry/portfolYOU">portfolYOU</a>

## **My Skills**

<div class="row">
{% include about/skills.html title="Native Languages" source=site.data.native-languages %}
{% include about/skills.html title="Programming Languages" source=site.data.programming-skills %}
{% include about/skills.html title="Adobe Skills" source=site.data.adobe-skills %}
{% include about/skills.html title="Affinity Skills" source=site.data.affinity-skills %}
{% include about/skills.html title="Microsoft Skills" source=site.data.microsoft-skills %}
{% include about/skills.html title="Google Skills" source=site.data.google-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

## **My Scholarship**

<div class="row">
{% include _data/scholarship.html %}
</div>

## **My Job Timeline**

<div class="row">
{% include about/timeline.html %}
</div>

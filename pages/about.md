---
layout: page
title: About
permalink: /about/
weight: 3
---

{% include landing.html %}

## **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>
I am a college student of Imam Syafi'i Islamic College. I learn more about Islamic religion, currently I have a hobby and take a job as graphic designer, C# & Bash script shell coder.

<div class="row">
{% include about/skills.html title="Native Languages" source=site.data.native-languages %}
{% include about/skills.html title="Programming Languages" source=site.data.programming-skills %}
{% include about/skills.html title="Adobe Softwares Skills" source=site.data.other-skills %}
{% include about/skills.html title="Affinity Serif Skills" source=site.data.affinity-skills %}
{% include about/skills.html title="Microsoft Office Skills" source=site.data.microsoft-skills %}
{% include about/skills.html title="Google Docs Skills" source=site.data.microsoft-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>

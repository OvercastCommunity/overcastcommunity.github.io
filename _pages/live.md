---
title: Live
description: "List of livestreams"
permalink: live/
in-nav: true
---

{% include image-header.html image='/assets/img/image-slider/15.jpg' %}

<div class="container my-4">
  {% for channel in site.data.channels %}
  a
    {% include twitch-player.html id=page.twitchId %}
  {% endfor %}
</div>

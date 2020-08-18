---
title: Live
description: "List of livestreams"
permalink: live/
in-nav: true
---

{% include image-header.html image='/assets/img/image-slider/15.jpg' %}
{% include twitch-player.html %}

<div class="container my-4">
  <ul>
    {% for channel in site.data.channels %}
      <li>
        a <!-- dummy character to see if it loops correctly -->
        {{ channel }}
      </li>
    {% endfor %}
  </ul>
</div>

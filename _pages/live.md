---
title: Live
description: "List of livestreams"
permalink: live/
in-nav: true
---

{% include image-header.html image='/assets/img/image-slider/15.jpg' %}

<div class="container my-4">
  <ul>
    {% for channel in site.data.channels %}
      <li>
        {{ channel[1] }} <!-- dummy -->
        {% include twitch-player.html id=channel[1] %}
      </li>
    {% endfor %}
  </ul>
</div>

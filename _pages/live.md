---
title: Live 🔴
description: "The Once Upon a Time in Overcast tournament"
permalink: live/
in-nav: false
---

{% include image-header.html image='/assets/img/image-slider/15.jpg' %}

<div class="container my-4">
  <ul class="list-unstyled">
    {% for channel in site.data.channels %}
      <li>
        {% assign c=channel[1]%}
        {% include twitch-player.html id=c %}
      </li>
    {% endfor %}
  </ul>
</div>

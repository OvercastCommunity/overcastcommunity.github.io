---
layout: default
---

<div id="carousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="{{ site.url}}/assets/images/marketing/1.jpg" class="d-block w-100">
        </div>
    {% for i in (2..12) %}
        <div class="carousel-item">
            <img src="{{ site.url}}/assets/images/marketing/{{ i }}.jpg" class="d-block w-100">
        </div>
    {% endfor %}
  </div>
</div>
<div class="jumbotron-fluid info">
    <div class="container">
        <h1 class="heading">Overcast <span style="color:#afafaf">Community</span></h1>
        <p class="lead">The awesome server that lets you play <br />large varieties of Minecraft PvP anytime, anywhere.</p>
        <a class="btn btn-primary btn-play" href="#play">Play Now »</a>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div class="sidebar" id="play">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title heading">Connect to</h5>
                        <hr />
                        <input class="input" data-toggle="tooltip" data-placement="top" title="Click to select" onclick="this.select();" readonly="" type="text" value="{{ site.mc_url }}">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="status">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="" class="card-img-left" id="mapImage" onerror="this.src='{{ site.url }}/assets/images/map_notfound.png'">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <p id="mapName"></p>
                                    <p id="playerCount"></p>
                                    <p id="fallback"></p>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

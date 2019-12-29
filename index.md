---
layout: default
---

<div class="jumbotron-fluid info">
    <div class="container">
        <h1 class="heading">Overcast <span style="color:#99AAB5">Community</span></h1>
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
                        <input class="input" data-toggle="tooltip" data-placement="top" title="Click to copy" onclick="this.select();" readonly="" type="text" value="{{ site.mc_url }}">
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
                                    <span id="mapName"></span> <span id="playerCount"></span>
                                    <span id="fallback"></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

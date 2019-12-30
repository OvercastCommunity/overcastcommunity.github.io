---
layout: default
---

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
                            <img src="" class="card-img-left" id="mapImage" onerror="this.src='{{ site.url }}/assets/images/fallback.png'">
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

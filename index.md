---
layout: default
---

<div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div class="sidebar" id="play">
                <div class="card mb-3">
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
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-auto">
                            <img src="" class="card-img-left img-thumbnail" id="mapImage" onerror="this.src='{{ site.url }}/assets/images/fallback.png'">
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <p id="mapName"></p>
                                    <p id="playerCount"></p>
                                    <p id="fallback"></p>
                                    <div id="players"></div>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

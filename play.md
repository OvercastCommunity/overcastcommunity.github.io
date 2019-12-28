---
layout: default
---

<div class="jumbotron jumbotron-fluid play" style="background: url('{{ site.url }}/assets/images/bg.jpg') #2c2f33 no-repeat center center fixed; background-size: cover;">
    <div class="container">
        <h1 class="heading">Play</h1>
        <p class="lead">Play anytime, anywhere</p>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            <div class="sidebar">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title heading">Connect to</h5>
                        <hr />
                        <input class="input" onclick="this.select();" readonly="" type="text" value="{{ site.mc_url }}">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="status">
                <div class="card">
                    <h5 class="card-header heading">Currently Playing</h5>
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

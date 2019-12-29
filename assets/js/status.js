---
---

const api = "https://mcapi.us/server/status?ip=";
const host = "{{ site.mc_url }}";
const imageProvider = "https://raw.githubusercontent.com/ChemistryX/overcast-map-images/master/"

setTimeout(function() {
    $.getJSON(api + host, function(json) {
        let count = "";
        let motd = "";

        const isOnline = json.online;
        const players = json.players.now;
        const max = json.players.max;

        if (isOnline) {
            motd = json.motd;
            let mapName = motd.split('»')[1].replace('«', '').replace(/.§./gi, '');
            let mapUrl = imageProvider + mapName.toLowerCase().replace(/ /gi, "_") + "/map.png";
            count += players;
            fetchPlayerCount(count + "<small>/" + max + " players</small>");
            fetchMapName(mapName);
            fetchMapImage(mapUrl);
        } else {            
            $("#fallback").html("Server is offline.")
        }

        
    }).fail(function() {
        console.error("Could not parse JSON from the API.");
    });
}, 500);

function fetchPlayerCount(html) {
    $("#playerCount").html(html);
}

function fetchMapName(html) {
    $("#mapName").html(html);
}

function fetchMapImage(html) {
    $("#mapImage").attr("src", html);
}

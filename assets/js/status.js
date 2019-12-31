---
---

const api = "{{ site.api }}";
const host = "{{ site.mc_url }}";
const imageProvider = "{{ site.image_provider }}"

setTimeout(function() {
    $.getJSON(api + host, function(json) {
        let count = "";
        let motd = "";

        const isOnline = json.online;
        const players = json.players.online;
        const max = json.players.max;

        if (isOnline) {
            motd = json.motd.clean[1];
            let mapName = motd.replace('» ', '').replace(' «', '').replace(/.§./gi, '');
            let mapUrl = imageProvider + mapName.toLowerCase().replace(/ /gi, "_").replace(/:/gi, "").replace(/'/gi, "_") + "/map.png";
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

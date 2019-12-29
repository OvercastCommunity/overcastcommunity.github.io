---
---

const api = "https://mcapi.us/server/status?ip=";
const host = "{{ site.mc_url }}";

setTimeout(function() {
    $.getJSON(api + host, function(json) {
        let count = "";
        let motd = "";

        const isOnline = json.online;
        const players = json.players.now;
        const max = json.players.max;

        if (isOnline) {
            motd = json.motd;
            let mapName = motd.split('»')[1].replace('«', '').replace(/§./gi, '');
            count += players;
            fetchPlayerCount(count + "<small>/" + max + " players</small>");
            fetchMapName(mapName);
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
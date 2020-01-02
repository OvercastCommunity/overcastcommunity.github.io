---
---

const api = "{{ site.api }}";
const host = "{{ site.mc_url }}";
const imageProvider = "{{ site.image_provider }}";
const avatarProvider = "{{ site.avatar_provider }}";

setTimeout(function() {
    $.getJSON(api + host, function(json) {
        let count = 0;
        let max = 0;
        let motd = "";
        let playersArray = [];

        const online = json.online;

        if (online) {
            const players = json.players.online;
            max = json.players.max;
            motd = json.motd.clean[1];
            const mapName = motd.replace('» ', '').replace(' «', '').replace(/.§./gi, '');
            const mapUrl = imageProvider + mapName.toLowerCase().replace(/ /gi, "_").replace(/:/gi, "").replace(/'/gi, "_") + "/map.png";
            count += players;
            playersArray = json.players.list;
            fetchPlayerCount(count + "<small>/" + max + " players</small>");
            fetchMapName(mapName);
            fetchMapImage(mapUrl);
            $(playersArray).each(function (index, item) {
                $('#players').append("<a href='#'><img class='avatar' title='" + item + "' src='" + avatarProvider + item + "' /></a>");
                $('#players').children().children().tooltip({});
            });
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

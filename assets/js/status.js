---
---

const api = "{{ site.api }}";
const host = "{{ site.mc_url }}";
const imageProvider = "{{ site.image_provider }}";
const avatarProvider = "{{ site.avatar_provider }}";

setTimeout(function() {
    $.getJSON(api + host, function(json) {
        const online = json.online;

        if (online) {
            const pgm = json.bukkit_extra.pgm;
            const onlinePlayers = json.players.online;
            const maxPlayers = json.players.max;
            matchId = Object.keys(pgm)[0];
            const currentMatch = pgm[matchId];
            const currentMapName = currentMatch.map.name;
            const currentMapObjective = currentMatch.map.objective;
            const mapUrl = imageProvider + currentMapName + "/map.png";
            const players = json.players.sample;
            const tags = currentMatch.map.tags;
            fetchPlayerCount(onlinePlayers + "<small>/" + maxPlayers + " players</small>");
            fetchCurrentMapName(currentMapObjective, currentMapName);
            if (currentMatch.next_map != null) {
                fetchNextMapName(currentMatch.next_map.name);
            }
            fetchMapImage(mapUrl);
            $(players).each(function (index, item) {
                $('#players').append("<a href='#'><img class='avatar' title='" + item.name + "' src='" + avatarProvider + item.name + "' /></a>");
                $('#players').children().children().tooltip({});
            });
            $(tags).each(function (index, item) {
                $('#tags').append("<span class='tag'>#" + item + "</span>");
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

function fetchCurrentMapName(title, html) {
    $("#currentMap").attr("title", title).html(html).tooltip({});
}

function fetchNextMapName(html) {
    $("#nextMap").html("<small>next:</small> " + html);
}

function fetchMapImage(html) {
    $("#mapImage").attr("src", html);
}

---
---

const api = "{{ site.api }}";
const host = "{{ site.mc_url }}";
const imageProvider = "{{ site.image_provider }}";
const avatarProvider = "{{ site.avatar_provider }}";

setTimeout(function() {
    $.getJSON(api + host, function(json) {
        const online = json.online;

        if (online && json.bukkit_extra != null) {
            const pgm = json.bukkit_extra.pgm;
            const onlinePlayers = json.players.online;
            const maxPlayers = json.players.max;
            const matchId = Object.keys(pgm)[0];
            const currentMatch = pgm[matchId];
            const currentMapName = currentMatch.map.name;
            const currentMapObjective = currentMatch.map.objective;
            const mapUrl = imageProvider + currentMapName + "/map.png";
            const players = json.players.sample;
            const tags = currentMatch.map.tags;
            const supportedProtocols = json.version.supportedVersions;
            const matchState = currentMatch.state;
            fetchPlayerCount(onlinePlayers + "<small id='maxPlayers'>/" + maxPlayers + " players</small>");
            fetchCurrentMapName(currentMapObjective, currentMapName);
            if (currentMatch.next_map != null) {
                fetchNextMapName(currentMatch.next_map.name);
            }
            fetchMapImage(mapUrl);
            $(players).each(function (index, item) {
                $('#players').append("<a><img class='avatar-sm' title='" + item.name + "' src='" + avatarProvider + item.name + "/38' /></a>");
                $('#players').children().children().tooltip({});
            });
            if (onlinePlayers > 12) {
                $('#players').append("<div class='w-100'><span class='badge badge-primary'>And " + (onlinePlayers - players.length) + " more</span></div>");
            }
            $(tags).each(function (index, item) {
                $('#tags').append("<span class='tag'>#" + item + "</span>");
            });
            fetchSupportedVersion(getVersion(supportedProtocols[0]) + " to " + getVersion(supportedProtocols[supportedProtocols.length - 1]));
            $("#version-parent").css("visibility", "");
            fetchMatchState(matchState);
            $("#matchState").css("visibility", "");     
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

function fetchSupportedVersion(html) {
    $("#version").html(html);
}

function fetchMatchState(html) {
    $("#matchState").addClass("state-" + html).attr("title", String(html).charAt(0).toUpperCase() + String(html).slice(1)).tooltip({});
}

function getVersion(protocol) {
    switch (protocol) {
        case 4:
            return "1.7.2";
        case 5:
            return "1.7.10";
        case 47:
            return "1.8";
        case 107:
            return "1.9";
        case 108:
            return "1.9.1";
        case 109:
            return "1.9.2";
        case 110:
            return "1.9.4";
        case 210:
            return "1.10.2";
        case 315:
            return "1.11";
        case 316:
            return "1.11.2";
        case 335:
            return "1.12";
        case 338:
            return "1.12.1";
        case 340:
            return "1.12.2";
        case 393:
            return "1.13";
        case 401:
            return "1.13.1";
        case 404:
            return "1.13.2";
        case 477:
            return "1.14";
        case 480:
            return "1.14.1";
        case 485:
            return "1.14.2";
        case 490:
            return "1.14.3";
        case 498:
            return "1.14.4";
        case 573:
            return "1.15";
        case 575:
            return "1.15.1";
        case 578:
            return "1.15.2";
        default:
            return "Unknown";
    }
}

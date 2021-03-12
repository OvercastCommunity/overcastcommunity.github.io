/*
 * Fallback play.js
 * Allow for play page to operate without extra data provided by PGM.
 *
 * Notes:
 * 1. map tags will NOT work using this version of play.js
 * 2. Motd format MUST be 'Overcast Community \n {color}» {mapname} {color}«' (Already default, but if adjusted the motd strings will be off)
 */
function getServerStatus({
  serverAddress,
  apiUrl,
  mapImagesUrl,
  playerAvatarsUrl,
}) {
  $.getJSON(apiUrl + serverAddress, (response) => {
    if (response.online) {
      //Fetch map name from MOTD, then strip away other data
      const motd = response.description;
      const motdStr = JSON.stringify(motd);
      const mapName = motdStr.substring(
        motdStr.lastIndexOf("»") + 4,
        motdStr.lastIndexOf("«") - 3
      );
      const matchState = getStateName(motdStr.charAt(30)); // Get the match state from the chat color

      const data = {
        supportedVersions: response.version.supportedVersions,
        onlinePlayerCount: response.players.online,
        maxPlayerCount: response.players.max,
        onlinePlayerSample: response.players.sample,
        mapName,
        matchState,
      };

      setVersionSupport();
      setPlayerCount(data.onlinePlayerCount, data.maxPlayerCount);
      setMatchInfoTemp(
        data.matchState,
        data.mapName,
        data.onlinePlayerSample,
        data.onlinePlayerCount,
        mapImagesUrl,
        playerAvatarsUrl
      );
    }
  });
}

function getStateName(state) {
  switch (state) {
    case "a":
      return "running";
    case "e":
      return "starting";
    case "c":
      return "finished";
    default:
      return "idle";
  }
}

function setVersionSupport() {
  $("#data-version-support").html(`1.7.2 - 1.16.5`);
}

function setPlayerCount(onlinePlayerCount, maxPlayerCount) {
  $("#data-player-count").html(
    `${onlinePlayerCount}<small class="text-muted">/${maxPlayerCount}</small>`
  );
}

function setMatchInfoTemp(
  currentState,
  currentMap,
  onlinePlayerSample,
  onlinePlayerCount,
  mapImagesUrl,
  playerAvatarsUrl
) {
  $("#data-match-state").addClass(currentState);
  $("#data-match-state")
    .attr("title", currentState.charAt(0).toUpperCase() + currentState.slice(1))
    .tooltip({});

  var playersHTML = "";
  if (onlinePlayerSample != null) {
    onlinePlayerSample.forEach((player, index) => {
      playersHTML += `
          <img src="${playerAvatarsUrl}${player.id}?overlay&size=40" data-toggle="tooltip" data-placement="top" title="${player.name}" alt="${player.name}">
        `;
    });

    var morePlayersHTML = "";
    if (onlinePlayerCount > onlinePlayerSample.length) {
      morePlayersHTML = `
          <span class="badge badge-info">
            And ${onlinePlayerCount - onlinePlayerSample.length} more...
          </span>
        `;
    }
  }

  $("#data-current-map-image").attr(
    "src",
    mapImagesUrl + currentMap + "/map.png".replace(/:/g, "")
  );
  $("#data-current-map-name").html(currentMap);
  $("#data-online-player-sample").html(playersHTML);
  $("#data-more-player-count").html(morePlayersHTML);

  $("#data-online-player-sample img").tooltip();
}

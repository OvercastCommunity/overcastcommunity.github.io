const protocolVersionMap = {
  4: '1.7.2',
  5: '1.7.10',
  47: '1.8',
  107: '1.9',
  108: '1.9.1',
  109: '1.9.2',
  110: '1.9.4',
  210: '1.10.2',
  315: '1.11',
  316: '1.11.2',
  335: '1.12',
  338: '1.12.1',
  340: '1.12.2',
  393: '1.13',
  401: '1.13.1',
  404: '1.13.2',
  477: '1.14',
  480: '1.14.1',
  485: '1.14.2',
  490: '1.14.3',
  498: '1.14.4',
  573: '1.15',
  575: '1.15.1',
  578: '1.15.2'
}

function getServerStatus({ serverAddress, apiUrl, mapImagesUrl, playerAvatarsUrl }) {
  $.getJSON(apiUrl + serverAddress, response => {
    if (response.online) {
      // REMOVED FOR Bungee Support, add back when fixed...
      //const pgm = response.bukkit_extra.pgm;
      //const currentMatch = pgm[Object.keys(pgm)[0]];
      //const currentMap = currentMatch.map.name;

      //Fetch map name from MOTD, then strip away other data
      const motd = response.description;
      const motdStr = JSON.stringify(motd);
      const mapName = motdStr.substring(motdStr.lastIndexOf("»") + 4, motdStr.lastIndexOf("«") - 3)
      const matchState = getStateName(motdStr.charAt(36));

      const data = {
        supportedVersions: response.version.supportedVersions,
        onlinePlayerCount: response.players.online,
        maxPlayerCount: response.players.max,
        onlinePlayerSample: response.players.sample,
        mapName,
        matchState,

        /* Removed because of Bungee - Add back later
        currentMatch,
        currentState: currentMatch.state,
        currentMap,
        currentObjective: currentMatch.map.objective,
        currentTags: currentMatch.map.tags,
        */

        currentMapImage: mapImagesUrl + mapName + '/map.png'
      }

      setVersionSupport();
      setPlayerCount(data.onlinePlayerCount, data.maxPlayerCount);
      setMatchInfoTemp(data.matchState, data.mapName, data.currentMapImage, data.onlinePlayerSample, data.onlinePlayerCount, playerAvatarsUrl);
    }
  });
}

function getStateName(state){
  switch(state){
    case 'a': 
      return "running"
    case 'e':
      return "starting"
    case 'c':
      return "finished"
    case '7':
        return "idle";
  }
}

function setVersionSupport(){
  $('#data-version-support').html(`1.8 - 1.15.2`);
}

/* Removed for Bungee Support - Add back when fixed
function setVersionSupport(supportedVersions) {
  //const minVersion = protocolVersionMap[Math.min(...supportedVersions)];
  //const maxVersion = protocolVersionMap[Math.max(...supportedVersions)];

  $('#data-version-support').html(`${minVersion} - ${maxVersion}`);
} 
*/

function setPlayerCount(onlinePlayerCount, maxPlayerCount) {
  $('#data-player-count').html(`${onlinePlayerCount}<small class="text-muted">/${maxPlayerCount}</small>`);
}


function setMatchInfoTemp(currentState,
  currentMap,
  currentMapImage,
  onlinePlayerSample,
  onlinePlayerCount,
  playerAvatarsUrl) {

  $('#data-match-state').addClass(currentState);
  $('#data-match-state').attr('title', currentState.charAt(0).toUpperCase() + currentState.slice(1)).tooltip({});
  

  var playersHTML = '';
  if (onlinePlayerSample != null) {
    onlinePlayerSample.forEach((player, index) => {
      playersHTML += `
        <img src="${playerAvatarsUrl}${player.id}?overlay&size=40" data-toggle="tooltip" data-placement="top" title="${player.name}" alt="${player.name}">
      `;
    });  

    var morePlayersHTML = '';
    if (onlinePlayerCount > onlinePlayerSample.length) {
      morePlayersHTML = `
        <span class="badge badge-info">
          And ${onlinePlayerCount - onlinePlayerSample.length} more...
        </span>
      `;
    }  
  }


  $('#data-current-map-image').attr('src', currentMapImage);
  $('#data-current-map-name').html(currentMap);
  $('#data-online-player-sample').html(playersHTML);
  $('#data-more-player-count').html(morePlayersHTML);

  $('#data-online-player-sample img').tooltip();
}

/* Removed for Bungee Support - Add back when fixed
function setMatchInfo(currentState,
                      currentMap,
                      currentMapImage,
                      currentTags,
                      onlinePlayerSample,
                      onlinePlayerCount,
                      playerAvatarsUrl) {
  $('#data-match-state').addClass(currentState);
  $('#data-match-state').attr('title', currentState.charAt(0).toUpperCase() + currentState.slice(1)).tooltip({});

  var tagHTML = '';
  currentTags.forEach(tag => {
    tagHTML += `
      <span class="badge badge-secondary">
        #${tag}
      </span>
    `;
  });

  var playersHTML = '';
  onlinePlayerSample.forEach((player, index) => {
    playersHTML += `
      <img src="${playerAvatarsUrl}${player.id}?overlay&size=40" data-toggle="tooltip" data-placement="top" title="${player.name}" alt="${player.name}">
    `;
  });

  var morePlayersHTML = '';
  if (onlinePlayerCount > onlinePlayerSample.length) {
    morePlayersHTML = `
      <span class="badge badge-info">
        And ${onlinePlayerCount - onlinePlayerSample.length} more...
      </span>
    `;
  }

  $('#data-current-map-image').attr('src', currentMapImage);
  $('#data-current-map-name').html(currentMap);
  $('#data-current-map-tags').html(tagHTML);
  $('#data-online-player-sample').html(playersHTML);
  $('#data-more-player-count').html(morePlayersHTML);

  $('#data-online-player-sample img').tooltip();
}
*/
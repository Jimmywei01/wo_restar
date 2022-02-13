/*模組化
  拿 api
  點擊切換 api
  渲染到畫面
*/

const clips = document.querySelector('.clips')
let div = document.createElement('div')
const request = new XMLHttpRequest

document.querySelector('.clipsTop').addEventListener('click', function () {
  getRequest('get', 'https://api.twitch.tv/kraken/clips/top?language=zh-tw&limit=10&period=all')
})

document.querySelector('.allClips').addEventListener('click', function () {
  getRequest('get', 'https://api.twitch.tv/kraken/clips/top?language=zh-tw&limit=50')
})

document.querySelector('.allGames').addEventListener('click', function () {
  getRequest('get', 'https://api.twitch.tv/helix/games/top')
})


function getData(methad, url) {
  request.open(methad, url, true)
  request.setRequestHeader('Client-ID', '7bkv4wxbjw1u1crs4ofptqfdypr56q')
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.setRequestHeader('Authorization', 'Bearer 34b36cjz9ciqae0u35crjlcu4hwxfp')
  request.send()
}

function inner(cursor, clipData, gameData) {
  while (clips.hasChildNodes()) {
    clips.removeChild(clips.lastChild)
  }
  if (cursor === 'MTE=' || cursor === 'NTA=') {
    div.classList.remove('games-inner')
    for (let i = 0; i <= clipData.length; i++) {
      let displayName = clipData[i].broadcaster.display_name
      div = document.createElement('div')
      div.classList.add('clips-inner')
      div.innerHTML = `
          <div class="display_name">${displayName}</div>
          <div class="title">${clipData[i].title}</div>
          <a href="${clipData[i].url}" alt=""><img class="embed_html" src=${clipData[i].thumbnails.small} alt=""></a>
          <div class="clips-warp">
            <div class="view">view:${clipData[i].views}</div>
            <div class="created_time">${clipData[i].created_at.slice(0, 10)}</div>
          </div>`
      clips.appendChild(div)
    }
  } else if (cursor === undefined) {
    div.classList.remove('clips-inner')
    for (let i = 0; i < gameData.length; i++) {
      let urlDow = gameData[i].box_art_url.slice(0, -21)
      div = document.createElement('div')
      div.classList.add('games-inner')
      div.innerHTML = `
          <div class="game-name">${gameData[i].name}</div>
          <img  class="game-img" src="${urlDow}-200x200.jpg" alt="">`
      clips.appendChild(div)
    }
  }
}

function getRequest(methad, url) {
  getData(methad, url)
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText)
      let cursor = json._cursor
      let clipData = json.clips
      let gameData = json.data
      inner(cursor, clipData, gameData)
    } else {
      console.log('error')
    }
  }
  request.onerror = function () {
    console.log('error')
  }
}

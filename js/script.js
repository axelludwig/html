var video = document.getElementById("background");
var music = document.getElementById("background_music");
// music.volume = 0.3;
var btn = document.getElementById("myBtn");
var mute_image = document.getElementById("mute_image");
var play_image = document.getElementById("play_image");
var started = false;

var count_mute = 0;
var count_play = 1;

var date = document.getElementById("date");
var time = document.getElementById("time");
var weather_icon = getElementById("iconweather")

//

startup();

function startup() {
  updateTime();
  updateDate();
}

video.onended = function () {
  alert("salut")
  video.load();
  video.play();
};


//gestion du temps

window.setInterval(function () {
  updateTime();
}, 1000);

function updateTime() {
  var today = new Date();
  var h = fixZeros(today.getHours());
  var m = fixZeros(today.getMinutes());
  var s = fixZeros(today.getSeconds());
  time.innerText = h + ":" + m + ":" + s;
}

function updateDate() {
  var datef = new Date();
  var res = datef.getUTCDay() + "/" + datef.getUTCMonth();
  date.innerText = res;
}

function fixZeros(val) {
  if (val < 10) return "0" + val;
  else return val;
}

//boutons

function pause() {
  count_play++;
  if (0 == count_play % 2) {
    video.play();
    play_image.src = "source/play.png"
  } else {
    video.pause();
    play_image.src = "source/pause.png"
  }
}

function mute() {
  count_mute++;
  if (0 == count_mute % 2) {
    music.volume = 0;
    mute_image.src = "source/mute.png"
  } else {
    if (!started) music.play();
    music.volume = 1;
    mute_image.src = "source/unmute.png"
  }
}

// meteo

function getWeather() {
  fetch('https://json.geoiplookup.io/')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      var longitude = json.longitude;
      var string = "http://api.openweathermap.org/data/2.5/weather?lat="
        + json.latitude + "&lon=" + json.longitude
        + "&APPID=e2ec4be1350ccc0e65512e5b66e5c807";
      fetch(string)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          
          console.log(json);
        });
    });
}


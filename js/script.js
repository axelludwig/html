var video = document.getElementById("myVideo");
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

startup();

function startup() {
  updateTime();
  ;
}

function updateDate() {

}

window.setInterval(function(){
  updateTime();
}, 1000);

function pause() {
  count_play++;
  if (0 == count_play % 2) {
    video.pause();
    play_image.src = "source/pause.png"
  } else {
    video.play();
    play_image.src = "source/play.png"
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

function updateTime() {
  var today = new Date();
  var t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();  
  time.innerText = t;
}

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


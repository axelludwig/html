var video = document.getElementById("myVideo");
var music = document.getElementById("background_music");
// music.volume = 0.3;
var btn = document.getElementById("myBtn");
var mute_image = document.getElementById("mute_image");
var play_image = document.getElementById("play_image");
var started = false;

var count_mute = 0;
var count_play = 1;

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

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(success, error);
}

function getWeather() {
  getLocation();
  // fetch('https://json.geoiplookup.io/')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((myJson) => {
  //     console.log(myJson);
  //   });
}
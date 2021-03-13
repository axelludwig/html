var video = document.getElementById("background");
var music = document.getElementById("background_music");
var btn = document.getElementById("myBtn");
var mute_image = document.getElementById("mute_image");
var play_image = document.getElementById("play_image");
var started = false;

var count_mute = 0;
var count_play = 0;

var date = document.getElementById("date");
var time = document.getElementById("time");
var full_date = document.getElementById("full_date")
var weather_icon = document.getElementById("iconweather")
var desc_weather1 = document.getElementById("descweather1");
var desc_weather2 = document.getElementById("descweather2");
var temp = document.getElementById("temp");

//

startup();

function startup() {
  updateTime();
  updateDate();
  getWeather()
}

video.onended = function () {
  alert("debug")
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
  var res = fixZeros(datef.getUTCDay() + 1) + "/" + fixZeros(datef.getUTCMonth() + 1);

  date.innerText = res;
  full_date.innerText = getFullDate(datef);
}

function updateIcon(path) {
  path = path.substring(0, path.length - 1);
  path += "n";
  weather_icon.src = "http://openweathermap.org/img/wn/" + path + "@2x.png";
}

function updateTemp(t) {
  var c = Math.floor(parseInt(t));
  temp.innerText = c + '°'
}

function updateDesc(d1, d2) {
  desc_weather1.innerText = d1;
  desc_weather2.innerText = d2;
}

function fixZeros(val) {
  if (val < 10) return "0" + val;
  else return val;
}

function getFullDate(d) {
  var res = '';

  switch (d.getDay()) {
    case 0:
      res += 'Sunday'
      break;
    case 1:
      res += 'Monday'
      break;
    case 2:
      res += 'Tuesday'
      break;
    case 3:
      res += 'Wednesday'
      break;
    case 4:
      res += 'Thursday'
      break;
    case 5:
      res += 'Friday'
      break;
    case 6:
      res += 'Saturday'
      break;
    default:
      res += '';
  } res += ' '

  switch (d.getUTCMonth()) {
    case 0:
      res += 'January'
      break;
    case 1:
      res += 'February'
      break;
    case 2:
      res += 'March'
      break;
    case 3:
      res += 'April'
      break;
    case 4:
      res += 'May'
      break;
    case 5:
      res += 'June'
      break;
    case 6:
      res += 'July'
      break;
    case 7:
      res += 'August'
      break;
    case 8:
      res += 'September'
      break;
    case 9:
      res += 'October'
      break;
    case 10:
      res += 'November'
      break;
    case 11:
      res += 'December'
      break;
    default:
      res += '';
  } res += ' '

  res += d.getDay();
  res += ', ';
  res += d.getFullYear();

  return res;
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
        + "&APPID=e2ec4be1350ccc0e65512e5b66e5c807&units=metric";
      fetch(string)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          updateIcon(json.weather[0].icon)
          updateTemp(json.main.temp)
          updateDesc(json.weather[0].main, json.weather[0].description)
          console.log(json);
        });
    });
}

function redirectChat(index) {
  if (0 == index) window.location.href = 'http://linkenparis.com:4200';
  if (1 == index) window.location.href = 'http://linkenparis.com:3080';
}
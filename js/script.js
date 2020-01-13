var video = document.getElementById("myVideo");
video.volume = 0.3;
var btn = document.getElementById("myBtn");
var mute_image = document.getElementById("mute_image");
var play_image = document.getElementById("play_image");

var count_mute = 0;

function pause() {
  if (video.paused) {
    video.play();
    play_image.src="source/play.png"
  } else {
    video.pause();
    play_image.src="source/pause.png"
  }
}

function mute() {
  count_mute++;
  if (0 == count_mute % 2) {
    video.muted = true;
    mute_image.src="source/mute.png"
  } else {
    video.muted = false;
    mute_image.src="source/unmute.png"
  }
}

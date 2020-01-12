let cursor = 0;
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) secret_place();
});

function youWon() {
  var audio = new Audio("ff7.mp3");
  audio.play();
}

function secret_place() {
  youWon();
  alert("");
  // window.location.href = "/secret_place.html";
}
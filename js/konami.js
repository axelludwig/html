let cursor = 0;
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) youWon();
});

function youWon() {
  confetti.start();
  var x = document.getElementById("myAudio");
  x.volume = 0.15;
  x.play();
  setTimeout(secret_place, 5000);
}

function secret_place() {
  window.location.href = "/secret_place.html";
}
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", () => {
  audio.play();
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0; // vrátí se na začátek
});

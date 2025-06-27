const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

playBtn.addEventListener('click', () => {
  audio.play();
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

playBtn.addEventListener('click', () => {
  audio.play().catch(e => console.log('Chyba při přehrávání:', e));
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

const beachBtn = document.getElementById('beachBtn');
const originalBtn = document.getElementById('originalBtn');

beachBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background2.jpg')";
});

originalBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background.jpg')";
});

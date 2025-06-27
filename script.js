const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

playBtn.addEventListener('click', () => {
  audio.play().catch(err => {
    alert("Chyba při přehrávání: " + err.message);
  });
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Přepínání tapet
const beachBtn = document.getElementById('beachBtn');
const originalBtn = document.getElementById('originalBtn');

beachBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background2.jpg')";
});

originalBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background.jpg')";
});

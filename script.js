const audio = document.getElementById('audioPlayer');
const playBtn1 = document.getElementById('playBtn1');
const playBtn2 = document.getElementById('playBtn2');
const stopBtn = document.getElementById('stopBtn');

// Cesty k písničkám
const song1 = 'choose_your_fighter.mp3';
const song2 = 'druha_pisen.mp3';  // sem dej název druhé písničky

playBtn1.addEventListener('click', () => {
  if (audio.src !== location.origin + '/' + song1) {
    audio.src = song1;
  }
  audio.play();
});

playBtn2.addEventListener('click', () => {
  if (audio.src !== location.origin + '/' + song2) {
    audio.src = song2;
  }
  audio.play();
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

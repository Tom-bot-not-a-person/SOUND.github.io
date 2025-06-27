const audio = document.getElementById('audioPlayer');
const playBtn1 = document.getElementById('playBtn1');
const playBtn2 = document.getElementById('playBtn2');
const playBtn3 = document.getElementById('playBtn3');
const stopBtn = document.getElementById('stopBtn');

// Cesty k písničkám
const song1 = 'choose_your_fighter.mp3';
const song2 = 'druha_pisen.mp3';    // uprav podle své skladby
const song3 = 'treti_pisen.mp3';    // uprav podle své skladby

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

playBtn3.addEventListener('click', () => {
  if (audio.src !== location.origin + '/' + song3) {
    audio.src = song3;
  }
  audio.play();
});

stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

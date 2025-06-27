// Hlavní hudba
const audio = document.getElementById('audioPlayer');
document.getElementById('playBtn').addEventListener('click', () => audio.play());
document.getElementById('stopBtn').addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Tapety
document.getElementById('beachBtn').addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background2.jpg')";
});
document.getElementById('originalBtn').addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background.jpg')";
});

// Heslo a tajné přehrávače
const passwordBtn = document.getElementById('passwordBtn');
const passwordInput = document.getElementById('passwordInput');

passwordBtn.addEventListener('click', () => {
  const value = passwordInput.value.trim();

  if (value === "Tom2012.") {
    document.getElementById('secret1').style.display = 'block';
  } else if (value === "Tomino") {
    document.getElementById('secret2').style.display = 'block';
  } else {
    alert("❌ Špatné heslo");
  }
});

// Tajný přehrávač 1
const secret1 = document.getElementById('secretPlayer1');
document.getElementById('playSecret1').addEventListener('click', () => secret1.play());
document.getElementById('stopSecret1').addEventListener('click', () => {
  secret1.pause();
  secret1.currentTime = 0;
});

// Tajný přehrávač 2
const secret2 = document.getElementById('secretPlayer2');
document.getElementById('playSecret2').addEventListener('click', () => secret2.play());
document.getElementById('stopSecret2').addEventListener('click', () => {
  secret2.pause();
  secret2.currentTime = 0;
});

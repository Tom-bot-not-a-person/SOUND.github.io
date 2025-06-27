// Hlavní přehrávač
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

// Zadání hesla
document.getElementById('passwordBtn').addEventListener('click', () => {
  const password = document.getElementById('passwordInput').value.trim();

  if (password === "Tom") {
    document.getElementById('secret1').style.display = 'block';
  } else if (password === "Tomino") {
    document.getElementById('secret2').style.display = 'block';
  } else if (password === "Alan") {
    document.getElementById('secret3').style.display = 'block';
  } else {
    alert("❌ Špatné heslo");
  }
});

// Tajná hudba 1
const secret1 = document.getElementById('secretPlayer1');
document.getElementById('playSecret1').addEventListener('click', () => secret1.play());
document.getElementById('stopSecret1').addEventListener('click', () => {
  secret1.pause();
  secret1.currentTime = 0;
});

// Tajná hudba 2
const secret2 = document.getElementById('secretPlayer2');
document.getElementById('playSecret2').addEventListener('click', () => secret2.play());
document.getElementById('stopSecret2').addEventListener('click', () => {
  secret2.pause();
  secret2.currentTime = 0;
});

// Tajná hudba 3
const secret3 = document.getElementById('secretPlayer3');
document.getElementById('playSecret3').addEventListener('click', () => secret3.play());
document.getElementById('stopSecret3').addEventListener('click', () => {
  secret3.pause();
  secret3.currentTime = 0;
});

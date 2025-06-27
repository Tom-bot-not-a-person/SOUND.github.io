// Hlavní přehrávač
const audio = document.getElementById('audioPlayer');
document.getElementById('playBtn').addEventListener('click', () => {
  audio.play().catch(e => alert("Chyba: " + e.message));
});
document.getElementById('stopBtn').addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Přepínání pozadí
document.getElementById('beachBtn').addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background2.jpg')";
});
document.getElementById('originalBtn').addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background.jpg')";
});

// Heslo a tajná sekce
const passwordInput = document.getElementById('passwordInput');
const passwordBtn = document.getElementById('passwordBtn');
const secretSection = document.getElementById('secretSection');

passwordBtn.addEventListener('click', () => {
  const entered = passwordInput.value.trim();
  if (entered === "Tom2012.") {
    secretSection.style.display = "block";
  } else {
    alert("Špatné heslo!");
  }
});

// Tajný přehrávač
const secretAudio = document.getElementById('secretPlayer');
document.getElementById('playSecret').addEventListener('click', () => {
  secretAudio.play().catch(e => alert("Chyba: " + e.message));
});
document.getElementById('stopSecret').addEventListener('click', () => {
  secretAudio.pause();
  secretAudio.currentTime = 0;
});

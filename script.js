const bg1Btn = document.getElementById('bg1Btn');
const bg2Btn = document.getElementById('bg2Btn');

bg1Btn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background.jpg')";  // první tapeta
});

bg2Btn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background2.jpg')"; // druhá tapeta
});

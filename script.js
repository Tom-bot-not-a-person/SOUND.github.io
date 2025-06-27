const beachBtn = document.getElementById('beachBtn');
const originalBtn = document.getElementById('originalBtn');

beachBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background2.jpg')";
});

originalBtn.addEventListener('click', () => {
  document.body.style.backgroundImage = "url('background.jpg')";
});

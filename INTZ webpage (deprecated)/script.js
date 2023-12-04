const header = document.querySelector('.fixed-header');
const videoSection = document.querySelector('.video-section');

window.addEventListener('scroll', () => {
  const videoHeight = videoSection.offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition < videoHeight) {
  } else {
  }
});

const teamSection = document.querySelector('.team-section');
const buttons = document.querySelectorAll('.team-button');
const players = document.querySelectorAll('.player');

function toggleGame(game) {
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
  });
});

players.forEach((player) => {
  player.addEventListener('mouseover', () => {
  });

  player.addEventListener('mouseout', () => {
  });

  player.addEventListener('click', () => {
  });
});

// Simple responsive navbar (toggle menu on small screens)
const navToggle = document.querySelector('nav ul');

function toggleMenu() {
  navToggle.classList.toggle('active');
}

document.querySelector('header').addEventListener('click', toggleMenu);

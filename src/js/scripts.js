export function showMenu() {
  document.querySelector('.nav-links').classList.toggle('nav-active');
  document.querySelector('.nav-open').classList.toggle('hide');
  document.querySelector('.nav-close').classList.toggle('show');
}

document.querySelector('a.nav-btn-toggle').addEventListener('click', showMenu);

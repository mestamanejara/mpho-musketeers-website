const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.addEventListener('click', () => {
    link.classList.add('is-clicked');
    window.setTimeout(() => link.classList.remove('is-clicked'), 500);
  });
});

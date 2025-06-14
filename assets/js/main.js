/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU ON LINK CLICK (Mobile Nav Close) =====*/ 
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  document.getElementById('nav-menu').classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const navMenuLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navMenuLink.classList.add('active-link');
    } else {
      navMenuLink.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration:1000,
  delay: 200
  // reset: true // Enable this line if you want animations to repeat when scrolling up/down
});

sr.reveal(`.home__data, .about__img, .skills__subtitle, .skills__text`, {});
sr.reveal(`.home__img, .about__subtitle, .about__text, .skills__img`, { delay: 400 });
sr.reveal(`.home__social-icon`, { interval: 200 });
sr.reveal(`.skills-list li, .project-card, .experience-card, .contact__input`, { interval: 150 });

/*===== OPTIONAL: BACK TO TOP BUTTON =====*/
const backToTopBtn = document.createElement("div");
backToTopBtn.innerHTML = `<i class='bx bx-up-arrow-alt'></i>`;
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('visible', window.scrollY > 300);
});

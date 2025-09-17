
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.classList.toggle('open');
});

const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const i = sections.indexOf(entry.target);
    if (i >= 0) {
      if (entry.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        links[i].classList.add('active');
      }
    }
  });
}, {rootMargin: "-40% 0px -55% 0px", threshold: 0.01});
sections.forEach(s => s && observer.observe(s));

const revealEls = document.querySelectorAll('.reveal, .reveal-delay');
const revObs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
},{threshold:0.14});
revealEls.forEach(el => revObs.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

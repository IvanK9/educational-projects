
const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIqon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIqon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
});

fade.addEventListener('click', () => {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIqon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
});

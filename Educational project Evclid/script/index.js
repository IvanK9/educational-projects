// // Слайдер

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    a11y: {
        paginationBulletMessage:
        'Перейти к слайду {{index}}'
    }
})

// Аккордеон

document.addEventListener("DOMContentLoaded", function() {
    let acc = new Accordion('.accordion__list', {
    duration: 700,
    elementClass: 'accordion__item',
    triggerClass: 'accordion__top',
    panelClass: 'accordion__bottom',
    showMultiple: false,
    // openOnInit: [0],
    collapse: true
  });
})

// Форма поиска

let openSearch = document.querySelector('.header__btn');
let openForm = document.querySelector('.header__form');
let closeSearch = document.querySelector('.search__btn-close')

document.querySelector('.header__btn').addEventListener('click', function () {
    document.querySelector('.header__form').classList.toggle('header__form--show');
})

document.querySelector('.search__btn-close').addEventListener('click', function () {
    document.querySelector('.header__form').classList.remove('header__form--show');

})

// Табы

let tabsBtn = document.querySelectorAll('.how__btn-tab');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (a) {
        const path = a.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('how__btn-tab--active') });
        a.currentTarget.classList.add('how__btn-tab--active');

        tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    })
})



// Бургер

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__item');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger--active1');
    menu.classList.toggle('header__nav--active1');
    document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active1');

        menu.classList.remove('header__nav--active1');

        document.body.classList.remove('stop-scroll');
    })
})




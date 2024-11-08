// Burger

const btnBurger = document.querySelector(".header__burger");
const btnBurgerFirst = document.querySelector(".burger__line--first");
const btnBurgerSecond = document.querySelector(".burger__line--second");
const headerNav = document.querySelector(".header__nav");
const headerItem = document.querySelectorAll(".header__item");
const headerOpen = document.querySelector(".header__wrapper");

btnBurger.addEventListener("click", function () {
  btnBurgerFirst.classList.toggle("burger__line--firstActive");
  btnBurgerSecond.classList.toggle("burger__line--secondActive");
  headerNav.classList.toggle("header__nav--open");
  headerOpen.classList.toggle("header--open");
});

headerItem.forEach((link) =>
  link.addEventListener("click", function () {
    btnBurgerFirst.classList.remove("burger__line--firstActive");
    btnBurgerSecond.classList.remove("burger__line--secondActive");
    headerNav.classList.remove("header__nav--open");
    headerOpen.classList.remove("header--open");
  })
);

// Slider

const slider = document.querySelector(".favorite__slider");
const sliderLine = document.querySelector(".favorite__slider-line");
const sliderItem = document.querySelectorAll(".favorite__item");
const btnNext = document.querySelector(".favorite__btn--next");
const btnPrev = document.querySelector(".favorite__btn--previous");
const controls = document.querySelectorAll('.favorite__bullet');

// console.log(controls);

let sliderCount = 0;
// let sliderWidth = slider.offsetWidth;
let sliderWidth = slider.clientWidth;

btnNext.addEventListener("click", nextSlide);

btnPrev.addEventListener("click", prevSlide);

function nextSlide() {
  clearTimeout(timerId);

  sliderCount++;

  if (sliderCount >= sliderItem.length) {
    sliderCount = 0;
  }

  rollSlide();
}

function prevSlide() {
  clearTimeout(timerId);

  sliderCount--;

  if (sliderCount < 0) {
    sliderCount = sliderItem.length - 1;
  }

  rollSlide();
}

function rollSlide() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  timerId = setInterval(nextSlide, 5000);
  controlBullets();
}

function controlBullets() {
  controls.forEach((item, index) => {
    if (index === sliderCount) {
      item.classList.add('favorite__bullet--active');
    } else {
      item.classList.remove('favorite__bullet--active');
    }
  })
}


let timerId = setInterval(nextSlide, 5000);
controlBullets();


console.log(sliderWidth)





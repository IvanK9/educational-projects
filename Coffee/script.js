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
const controls = document.querySelectorAll(".favorite__bullet");

let sliderCount = 0;
let elapsedTime = 0;
let sliderWidth = slider.clientWidth;
let isPaused = false;

btnNext.addEventListener("click", nextSlide);

btnPrev.addEventListener("click", prevSlide);

function nextSlide() {
  clearInterval(timerId);
  elapsedTime = 0;

  sliderCount++;

  if (sliderCount >= sliderItem.length) {
    sliderCount = 0;
  }

  rollSlide();
}

function prevSlide() {
  clearInterval(timerId);
  elapsedTime = 0;

  sliderCount--;

  if (sliderCount < 0) {
    sliderCount = sliderItem.length - 1;
  }

  rollSlide();
}

function rollSlide() {
  if (!isPaused) {
    clearInterval(timerId);
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    timerId = setInterval(nextSlide, 5000);
    controlBullets();
  }
}

function controlBullets() {
  controls.forEach((item, index) => {
    if (index === sliderCount) {
      item.classList.add("favorite__bullet--active");
    } else {
      item.classList.remove("favorite__bullet--active");
    }
  });
}

let timerId = setInterval(nextSlide, 5000);
controlBullets();

function handler(event) {
  sliderItem.forEach((el) => {
    if (el === event.target && event.type === "mouseover") {
      controls.forEach((item) => {
        item.classList.add("favorite__bullet--pause");
      });
      isPaused = true;
      clearInterval(timerId);
    }
    if (el === event.target && event.type === "mouseout") {
      controls.forEach((item) => {
        item.classList.remove("favorite__bullet--pause");
      });
      clearInterval(timerId);
      isPaused = false;
      timerId = setInterval(nextSlide, 5000 - elapsedTime);
    }
  });
}

sliderLine.addEventListener("mouseover", handler);
sliderLine.addEventListener("mouseout", handler);

function handlerTouch(event) {
  sliderItem.forEach((el) => {
    if (el === event.target && event.type === "touchmove") {
      controls.forEach((item) => {
        item.classList.add("favorite__bullet--pause");
      });
      isPaused = true;
      clearInterval(timerId);
    }
    if (el === event.target && event.type === "touchend") {
      controls.forEach((item) => {
        item.classList.remove("favorite__bullet--pause");
      });
      isPaused = false;
      timerId = setInterval(nextSlide, 5000 - elapsedTime);
    }
  });
}

sliderLine.addEventListener("touchmove", handlerTouch, { passive: true });
sliderLine.addEventListener("touchend", handlerTouch);

function getTime() {
  if (elapsedTime <= 5000) {
    if (!isPaused) {
      elapsedTime += 1000;
    }
  }

  if (elapsedTime > 5000) {
    elapsedTime = 1000;
  }
  setTimeout(getTime, 1000);
}

let getTimer = setTimeout(getTime, 1000);

// SWIPE

let posInit = 0;
let posX1 = 0;
let posX2 = 0;
let posFinal = 0;
let posThreshold = sliderWidth * 0.25;
let regExp = /[-0-9.]+(?=px)/;


let getEvent = function() {
  return (event.type.search('touch') !== -1) ? event.touches[0] : event;
};

function swipeStart() {
  let evt = getEvent(event);

  posInit = posX1 = evt.clientX;

  sliderLine.style.transition = '';

  document.addEventListener('touchmove', swipeAction);
  document.addEventListener('touchend', swipeEnd);
  document.addEventListener('mousemove', swipeAction);
  document.addEventListener('mouseup', swipeEnd);

  sliderLine.classList.remove('grab');
  sliderLine.classList.add('grabbing');
}


function swipeAction() {
  let evt = getEvent();
  let style = sliderLine.style.transform;
  let transform = +style.match(regExp);

  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;

  sliderLine.style.transform = `translateX(${transform - posX2}px)`;
}

function swipeEnd () {
  posFinal = posInit - posX1;

  document.removeEventListener('touchmove', swipeAction);
  document.removeEventListener('mousemove', swipeAction);
  document.removeEventListener('touchend', swipeEnd);
  document.removeEventListener('mouseup', swipeEnd);

  if (Math.abs(posFinal) > posThreshold) {
    if (posInit < posX1) {
      sliderCount--;
    } else if (posInit > posX1) {
      sliderCount++;
    }
  }

  if (posInit !== posX1) {
    if (sliderCount >= sliderItem.length) {
      sliderCount = 0;
      rollSlide();
    } else if (sliderCount < 0) {
      sliderCount = sliderItem.length - 1;
      rollSlide();
    } else {
      rollSlide();
    }
  }

  sliderLine.classList.add('grab');
  sliderLine.classList.remove('grabbing');
}

slider.addEventListener('touchstart', swipeStart, { passive: true });
slider.addEventListener('mousedown', swipeStart);
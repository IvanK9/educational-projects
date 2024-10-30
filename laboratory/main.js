// Slider

const slider = document.querySelector(".slider");
const btnNext = document.querySelector(".reviews__btn--next");
const btnPrev = document.querySelector(".reviews__btn--previous");
const itemWidth = document.querySelector('.slider__item').offsetWidth;

let isDragging = false, startX, startScrollLeft;

const dragStart = (event) => {
  isDragging = true;
  slider.classList.add('dragging');
  startX = event.pageX;
  startScrollLeft = slider.scrollLeft;
};

const dragging = (event) => {
  if (!isDragging) return;
  slider.scrollLeft = startScrollLeft - (event.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  slider.classList.remove('dragging');
};

btnPrev.addEventListener("click", () => {
  slider.scrollLeft -= itemWidth;
});

btnNext.addEventListener("click", () => {
  slider.scrollLeft += itemWidth;
});

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener('mouseup', dragStop);

// Accordion

const accordion = document.querySelectorAll('.accordion__item');


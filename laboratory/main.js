// Slider

const slider = document.querySelector(".slider");
const btnNext = document.querySelector(".reviews__btn--next");
const btnPrev = document.querySelector(".reviews__btn--previous");
const itemWidth = document.querySelector(".slider__item").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (event) => {
  isDragging = true;
  slider.classList.add("dragging");
  startX = event.pageX;
  startScrollLeft = slider.scrollLeft;
};

const dragging = (event) => {
  if (!isDragging) return;
  slider.scrollLeft = startScrollLeft - (event.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  slider.classList.remove("dragging");
};

btnPrev.addEventListener("click", () => {
  slider.scrollLeft -= itemWidth;
});

btnNext.addEventListener("click", () => {
  slider.scrollLeft += itemWidth;
});

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Accordion


document.addEventListener("DOMContentLoaded", function() {
  const accordion  = new Accordion('.question__accordion', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__header',
  panelClass: 'accordion__body',
  showMultiple: false,
  collapse: true
});
})




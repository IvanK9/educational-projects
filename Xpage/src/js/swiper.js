import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// import "./assets/fonts/fonts.scss";
// import "./scss/main.scss"

const swiperText = ["играй", "учись", "смотри"];
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + swiperText[index] + "</div>";
    },
  },
});

document.querySelectorAll(".swiper-pagination-bullet").forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    el.click();
  })
);
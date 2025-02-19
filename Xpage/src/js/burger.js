const btnBurger = document.querySelector(".menu");

const headerNav = document.querySelector(".header__nav");
const headerItem = document.querySelectorAll(".nav__item");
const body = document.getElementsByTagName("body")[0];
const mediaQueryTablet = window.matchMedia("(max-width: 768px)");

function burgerActive() {
  btnBurger.addEventListener("click", function () {
    btnBurger.classList.toggle("menu--active");
    headerNav.classList.toggle("nav--open");
    body.classList.toggle("noscroll");
  });

  headerItem.forEach((link) =>
    link.addEventListener("click", function () {
      btnBurger.classList.remove("menu--active");
      headerNav.classList.remove("nav--open");
      body.classList.remove("noscroll");
    })
  );
}

mediaQueryTablet.addEventListener("change", burgerActive);

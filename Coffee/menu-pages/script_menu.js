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

// Tabs

const menuTabs = document.querySelectorAll(".menu__btn-tabs");
const menuTabsActive = document.querySelector(".menu__btn-tabs--active");

let tabsActiveId;

menuTabs.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.classList.contains("menu__btn-tabs--active")) {
      return;
    } else {
      menuTabs.forEach((i) => {
        i.classList.remove("menu__btn-tabs--active");
      });
      el.classList.add("menu__btn-tabs--active");
      tabsActiveId = el.id;
      fetch("../products.json")
        .then((response) => response.json())
        .then((menuObj) => {
          createMenu(menuObj, el.id);
        });
    }
  });
});

const tabsId = document.getElementById("id");
const menuList = document.querySelector(".menu__cards-list");

function createMenu(menuObj, id) {
  menuList.innerHTML = "";
  const productType = menuObj.filter((el) => el.category == id);
  productType.forEach((elem, index) => {
    if (productType.length > 4 && document.body.offsetWidth <= 768) {
      console.log('Loh');
    } else {
      menuList.insertAdjacentHTML(
        "beforeend",
        `
          <li class="menu__cards-item">
          <div class="menu__img-wrapper">
              <img src="../img/${id}-${index + 1}.png" alt="${
          elem.name
        }" class="menu__cards-item-img">
          </div>
          <div class="menu__cards-item-content">
              <h3 class="menu__cards-item-title">
                  ${elem.name}
              </h3>
              <p class="menu__cards-item-descr">
                  ${elem.description}
              </p>
              <span class="menu__cards-item-price">
                  $${elem.price}
              </span>
          </div>
      </li>
      `
      );
    }
  });
}

fetch("../products.json")
  .then((response) => response.json())
  .then((menuObj) => {
    createMenu(menuObj, 'coffee');
  });

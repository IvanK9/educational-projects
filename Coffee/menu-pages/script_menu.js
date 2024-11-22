// Burger

const btnBurger = document.querySelector(".header__burger");
const btnBurgerFirst = document.querySelector(".burger__line--first");
const btnBurgerSecond = document.querySelector(".burger__line--second");
const headerNav = document.querySelector(".header__nav");
const headerItem = document.querySelectorAll(".header__item");
const headerOpen = document.querySelector(".header__wrapper");
const body = document.getElementsByTagName("body")[0];

btnBurger.addEventListener("click", function () {
  btnBurgerFirst.classList.toggle("burger__line--firstActive");
  btnBurgerSecond.classList.toggle("burger__line--secondActive");
  headerNav.classList.toggle("header__nav--open");
  headerOpen.classList.toggle("header--open");
  body.classList.toggle("scroll-lock");
});

headerItem.forEach((link) =>
  link.addEventListener("click", function () {
    btnBurgerFirst.classList.remove("burger__line--firstActive");
    btnBurgerSecond.classList.remove("burger__line--secondActive");
    headerNav.classList.remove("header__nav--open");
    headerOpen.classList.remove("header--open");
    body.classList.remove("scroll-lock");
  })
);

// Tabs

const menuTabs = document.querySelectorAll(".menu__btn-tabs");
const menuTabsActive = document.querySelector(".menu__btn-tabs--active");
const menuList = document.querySelector(".menu__cards-list");
const btnShowMore = document.querySelector(".menu__btn-showMore");
let allProducts;

let activeCategory = "coffee";

menuTabs.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.classList.contains("menu__btn-tabs--active")) {
      return;
    } else {
      menuTabs.forEach((i) => {
        i.classList.remove("menu__btn-tabs--active");
      });
      el.classList.add("menu__btn-tabs--active");
      activeCategory = el.id;
      fetch("../products.json")
        .then((response) => response.json())
        .then((activeMenu) => {
          renderMenu(activeMenu, activeCategory);
          allProducts = activeMenu;
          activeCategory = activeCategory;
        });
    }
  });
});

function renderMenu(activeMenu, activeCategory) {
  const productType = activeMenu.filter((el) => el.category == activeCategory);

  menuList.innerHTML = "";
  productType.forEach((el, index) => {
    menuList.insertAdjacentHTML(
      "beforeend",
      `
                  <li class="menu__cards-item" id="${el.name}"
                  data-category = "${activeCategory}">
                  <div class="menu__img-wrapper">
                      <img src="../img/${activeCategory}-${index + 1}.png"
                      alt="${el.name}" class="menu__cards-item-img">
                  </div>
                  <div class="menu__cards-item-content">
                      <h3 class="menu__cards-item-title">
                          ${el.name}
                      </h3>
                      <p class="menu__cards-item-descr">
                          ${el.description}
                      </p>
                      <span class="menu__cards-item-price">
                          $${el.price}
                      </span>
                  </div>
              </li>
              `
    );
  });
}

fetch("../products.json")
  .then((response) => response.json())
  .then((activeMenu) => {
    renderMenu(activeMenu, "coffee");
    allProducts = activeMenu;
  });

// Modal

const dialog = document.querySelector(".modal");
const dialogClose = document.querySelector(".modal__btn--close");
const cardImg = document.querySelector(".modal__img");
const cardName = document.querySelector(".modal__title");
const cardDescr = document.querySelector(".modal__descrip");
const cardPrice = document.querySelector(".modal__price-value");
const cardSizeS = document.querySelector(".size__btn--S");
const cardSizeM = document.querySelector(".size__btn--M");
const cardSizeL = document.querySelector(".size__btn--L");
const cardAdditives1 = document.querySelector(".additives__btn--1");
const cardAdditives2 = document.querySelector(".additives__btn--2");
const cardAdditives3 = document.querySelector(".additives__btn--3");
const btnSizes = document.querySelectorAll(".size__btn");
const btnAdditives = document.querySelectorAll(".additives__btn");

let cardIndex;
let price = 0;
let cardFullPrice;
let addValueSize = 0;
let addValueAdditives = 0;

menuList.addEventListener("click", function (event) {
  let card = event.target.closest("LI");
  const cardsMenu = allProducts.filter((el) => el.category == activeCategory);

  if (!card) return;

  openModal();
  cardsMenu.forEach((el, index) => {
    if (el.name === card.id) {
      cardIndex = index;
      renderModal(el);
    }
  });
});

function renderModal(card) {
  cardName.innerHTML = card.name;
  cardImg.alt = card.name;
  cardImg.src = `../img/${card.category}-${cardIndex + 1}.png`;
  cardDescr.innerHTML = card.description;
  cardSizeS.innerHTML = card.sizes.s.size;
  cardSizeM.innerHTML = card.sizes.m.size;
  cardSizeL.innerHTML = card.sizes.l.size;
  cardAdditives1.innerHTML = card.additives[0].name;
  cardAdditives2.innerHTML = card.additives[1].name;
  cardAdditives3.innerHTML = card.additives[2].name;

  price = +card.price;
  cardFullPrice = +card.price;

  renderPrice();
}

function renderPrice() {
  if (Number.isInteger(cardFullPrice) && cardFullPrice !== undefined) {
    cardPrice.innerHTML = `$${cardFullPrice}.00`;
  } else {
    cardPrice.innerHTML = `$${cardFullPrice}0`;
  }
}

function activateSizeTabs(array) {
  array.forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("size__btn--active")) {
        return;
      } else {
        array.forEach((elem) => {
          elem.classList.remove("size__btn--active");
        });
        el.classList.add("size__btn--active");
      }
    });
  });
}

function activateAdditivesTabs(array) {
  array.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("additives__btn--active");
    });
  });
}

function checkSize(array) {
  array.forEach((el) => {
    el.addEventListener("click", () => {
      if (
        (el.classList.contains("size__btn--active") &&
          el.lastElementChild.innerHTML == "200 ml") ||
        el.lastElementChild.innerHTML == "50 g"
      ) {
        cardFullPrice =
          +Number(price).toFixed(2) + +Number(addValueAdditives).toFixed(2);
        addValueSize = 0;
      } else if (
        (el.classList.contains("size__btn--active") &&
          el.lastElementChild.innerHTML == "300 ml") ||
        el.lastElementChild.innerHTML == "100 g"
      ) {
        cardFullPrice =
          +Number(price).toFixed(2) + +Number(addValueAdditives).toFixed(2);
        addValueSize = 0.5;
      } else {
        cardFullPrice =
          +Number(price).toFixed(2) + +Number(addValueAdditives).toFixed(2);
        addValueSize = 1;
      }

      cardFullPrice =
        +Number(cardFullPrice).toFixed(2) + +Number(addValueSize).toFixed(2);
      renderPrice();
    });
  });
}

function checkAdditives(array) {
  Array.from(array).forEach((el) => {
    el.addEventListener("click", () => {
      if (el.classList.contains("additives__btn--active")) {
        addValueAdditives += 0.5;
      } else {
        addValueAdditives -= 0.5;
      }
      cardFullPrice =
        +Number(price).toFixed(2) +
        +Number(addValueAdditives).toFixed(2) + +Number(addValueSize).toFixed(2);
      renderPrice();
    });
  });
}

function openModal() {
  dialog.showModal();
  document.body.classList.add("scroll-lock");
}

function returnScroll() {
  document.body.classList.remove("scroll-lock");
}

function closeModal() {
  dialog.close();
  returnScroll();
  removeSizeTabs(btnSizes);
  removeAdditivesTabs(btnAdditives);
  removePrice();
}

dialogClose.addEventListener("click", (event) => {
  event.stopPropagation();
  closeModal();
});

function closeOnBackDropClick({ currentTarget, target }) {
  const dialog = currentTarget;
  const isClickedOnBackDrop = target === dialog;
  if (isClickedOnBackDrop) {
    closeModal();
  }
}

dialog.addEventListener("cancel", (event) => {
  returnScroll();
});

dialog.addEventListener("click", closeOnBackDropClick);
dialog.addEventListener("click", checkAdditives);

function removeSizeTabs(array) {
  array.forEach((el, index) => {
    el.classList.remove("size__btn--active");
    if (index === 0) {
      el.classList.add("size__btn--active");
    }
  });
  addValueSize = 0;
}

function removeAdditivesTabs(array) {
  array.forEach((el) => {
    el.classList.remove("additives__btn--active");
  });
  addValueAdditives = 0;
}

function removePrice() {
  cardFullPrice = price;
}

activateSizeTabs(btnSizes);
activateAdditivesTabs(btnAdditives);
checkSize(btnSizes);
checkAdditives(btnAdditives);

renderPrice();

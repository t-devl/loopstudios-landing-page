const body = document.querySelector("body");
const navToggle = document.querySelector(".header__nav-toggle");
const navToggleIcon = document.querySelector(".header__nav-toggle-icon");
const navList = document.querySelector(".header__nav-list");

navToggle.addEventListener("click", () => {
  if (navList.classList.contains("header__nav-list--hidden")) {
    body.classList.add("no-scroll");
    navList.classList.remove("header__nav-list--hidden");
    navToggleIcon.src = "images/icon-close.svg";
  } else {
    body.classList.remove("no-scroll");
    navList.classList.add("header__nav-list--hidden");
    navToggleIcon.src = "images/icon-hamburger.svg";
  }
});

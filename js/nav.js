const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const title = document.querySelector(".header__text");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  title.classList.toggle("header__text-hide");
});

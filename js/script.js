const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    navbar.classList.add("small-menu");
  } else {
    navbar.classList.remove("small-menu");
  }
};

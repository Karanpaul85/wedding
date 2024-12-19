"use strict";
new Splide("#banner", {
  type: "fade", // Enables fade transition
  autoplay: true, // Automatically plays the slides
  arrows: false, // Hides navigation arrows
  interval: 3000, // Delay between slide transitions in milliseconds
  rewind: true, // Enables looping for fade type
  pagination: false,
}).mount();

new Splide("#testimonials", {
  type: "loop", // Enables fade transition
  autoplay: true, // Automatically plays the slides
  arrows: false, // Hides navigation arrows
  pagination: true,
}).mount();

var scrollPosition = window.scrollY;
var logoContainer = document.querySelector("header");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;
  if (screen.width > 768) {
    if (scrollPosition >= 30) {
      logoContainer.classList.add("dark");
    } else {
      logoContainer.classList.remove("dark");
    }
  }
});

/** add mobile hemburger icon*/

function hmClick(e) {
  const hmMenu = document.querySelector(".hm");
  const nav = document.querySelector("nav");
  hmMenu.classList.toggle("open");
  nav.classList.toggle("open");
}

function createHm(mainHeader) {
  const hmSec = document.createElement("div");
  hmSec.className = "hm";
  hmSec.innerHTML = "<span></span>";
  hmSec.onclick = hmClick;
  mainHeader.prepend(hmSec);
}

if (screen.width <= 768) {
  const mainHeader = document.querySelector(".mainHeader");
  mainHeader && createHm(mainHeader);
}

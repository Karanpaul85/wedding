"use strict";
// new Splide("#banner", {
//   type: "fade",
//   autoplay: true,
//   arrows: false,
//   interval: 3000,
//   rewind: true,
//   pagination: false,
// }).mount();

new Splide("#banner", {
  type: "fade",
  perPage: 1,
  autoplay: true,
  interval: 4000,
  rewind: true,
  pagination: false,
  arrows: false,
}).mount();

new Splide("#testimonials", {
  type: "loop",
  autoplay: true,
  arrows: false,
  pagination: true,
  interval: 4000,
  speed: 2000,
}).mount();

new Splide("#logoSlider", {
  type: "loop",
  perPage: 5,
  perMove: 1,
  autoplay: true,
  arrows: false,
  pagination: false,
  interval: 2000,
  gap: 10,
  breakpoints: {
    640: {
      perPage: 2,
    },
  },
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

/**smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const hmMenu = document.querySelector(".hm");
    const nav = document.querySelector("nav");
    if (hmMenu && nav) {
      hmMenu.classList.toggle("open");
      nav.classList.toggle("open");
    }

    const targetElement = document.querySelector(this.getAttribute("href"));
    const offsetPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset - 132;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

/**random colors */

const colors = ["pink", "black", "brown", "lightPink"];
const galleryList = document.querySelectorAll(
  ".gallery ul li .imgSec .imgText"
);
// Iterate through each element in galleryList
galleryList.forEach((element) => {
  // Pick a random color from the colors array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Add the random color as a class to the element
  element.classList.add(randomColor);
});

/**zoom the image */
galleryList.forEach((element) => {
  element.addEventListener("click", function (e) {
    const parentElem = e.target.parentElement;
    const image = parentElem.querySelector("img");
    const zoomDiv = document.createElement("div");
    zoomDiv.className = "zoomSec";

    // Create the zoom popup content
    zoomDiv.innerHTML = `
      <div class="close">Close</div>
      <div class="zoomImageSec">${image.outerHTML}</div>
    `;

    // Append zoomDiv to the body
    document.body.appendChild(zoomDiv);
    document.body.style.overflow = "hidden";

    // Attach close event to the close button
    zoomDiv.querySelector(".close").addEventListener("click", function () {
      document.body.style.overflow = ""; // Restore scroll
      document.body.removeChild(zoomDiv); // Remove zoomDiv
    });
  });
});

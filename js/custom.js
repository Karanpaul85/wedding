"use strict";

new Splide("#banner", {
  type: "fade", // Enables fade transition
  autoplay: true, // Automatically plays the slides
  arrows: false, // Hides navigation arrows
  interval: 3000, // Delay between slide transitions in milliseconds
  rewind: true, // Enables looping for fade type
}).mount();

new Splide("#testimonials", {
  type: "loop", // Enables fade transition
  autoplay: true, // Automatically plays the slides
  arrows: false, // Hides navigation arrows
  pagination: true,
}).mount();

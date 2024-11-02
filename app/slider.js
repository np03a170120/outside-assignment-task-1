import Swiper from "swiper";

import "swiper/css";

export const slider = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

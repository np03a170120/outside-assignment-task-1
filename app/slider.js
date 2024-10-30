import Swiper from "swiper";

import "swiper/css";

export const slider = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
});

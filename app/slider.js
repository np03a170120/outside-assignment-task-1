import { Navigation, Pagination } from "swiper/modules";
import Swiper from "swiper";

import "swiper/css";

export const slider = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
});

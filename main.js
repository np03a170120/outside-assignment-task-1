import { hideHeaderAnnouncement } from "./app/hideHeaderAnnouncement";
import { toggleHamburgerMenu } from "./app/toggleHamburgerMenu";
import "./app/slider";

const init = () => {
  hideHeaderAnnouncement();
  toggleHamburgerMenu();
};

document.addEventListener("DOMContentLoaded", init);

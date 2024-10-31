import { hideHeaderAnnouncement } from "./app/hideHeaderAnnouncement";
import { toggleHamburgerMenu } from "./app/toggleHamburgerMenu";
import { megaMenu } from "./app/megaMenu";
import "./app/slider";

const init = () => {
  hideHeaderAnnouncement();
  toggleHamburgerMenu();
  megaMenu();
};

document.addEventListener("DOMContentLoaded", init);

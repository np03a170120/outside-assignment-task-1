import { hideHeaderAnnouncement } from "./app/hideHeaderAnnouncement";
import { toggleHamburgerMenu } from "./app/toggleHamburgerMenu";
import { megaMenu } from "./app/megaMenu";
import { navTabs } from "./app/navtabs";
import "./app/slider";

const init = () => {
  hideHeaderAnnouncement();
  toggleHamburgerMenu();
  megaMenu();
  navTabs();
};

document.addEventListener("DOMContentLoaded", init);

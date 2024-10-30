const hideHeaderAnnouncement = () => {
  const closeBtn = document.querySelector(".header_announcement_close_btn");
  const headerAnnouncement = document.querySelector(".header_announcement");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      headerAnnouncement.style.display = "none";
    });
  }
};

const toggleHamburgerMenu = () => {
  const menu = document.querySelector(".nav_links");
  const toggleIcon = document.querySelector("#toggleIcon");
  const menuIcon = "./image/icons/menu.svg";
  const crossIcon = "./image/icons/close.svg";

  toggleIcon.addEventListener("click", () => {
    menu.classList.toggle("show-links");

    toggleIcon.src = toggleIcon.src.endsWith("menu.svg") ? crossIcon : menuIcon;
  });
};

const init = () => {
  hideHeaderAnnouncement();
  toggleHamburgerMenu();
};

document.addEventListener("DOMContentLoaded", init);

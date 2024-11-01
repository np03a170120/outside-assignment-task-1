export function toggleHamburgerMenu() {
  const menu = document.querySelector(".nav_links");
  const toggleIcon = document.querySelector("#toggleIcon");
  const menuIcon = "./menu.svg";
  const crossIcon = "./close.svg";
  const megaMenus = document.querySelectorAll(".mega_menu");

  toggleIcon.addEventListener("click", () => {
    if (menu.classList.contains("show-links")) {
      menu.classList.add("hide-links");
      setTimeout(() => {
        menu.classList.remove("show-links", "hide-links");
      }, 300);
    } else {
      menu.classList.add("show-links");
    }
    toggleIcon.src = toggleIcon.src.endsWith("menu.svg") ? crossIcon : menuIcon;
    megaMenus.forEach((menu, index) => {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      }
    });
  });
}

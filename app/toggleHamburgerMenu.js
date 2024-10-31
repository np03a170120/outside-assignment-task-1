export function toggleHamburgerMenu() {
  const menu = document.querySelector(".nav_links");
  const toggleIcon = document.querySelector("#toggleIcon");
  const menuIcon = "./image/icons/menu.svg";
  const crossIcon = "./image/icons/close.svg";

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
  });
}

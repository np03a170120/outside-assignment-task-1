export function toggleHamburgerMenu () {
  const menu = document.querySelector(".nav_links");
  const toggleIcon = document.querySelector("#toggleIcon");
  const menuIcon = "./image/icons/menu.svg";
  const crossIcon = "./image/icons/close.svg";

  toggleIcon.addEventListener("click", () => {
    menu.classList.toggle("show-links");

    toggleIcon.src = toggleIcon.src.endsWith("menu.svg") ? crossIcon : menuIcon;
  });
};
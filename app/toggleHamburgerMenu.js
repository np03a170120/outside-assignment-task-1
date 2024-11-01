export function toggleHamburgerMenu() {
  const menu = document.querySelector(".nav_links");
  const toggleIcon = document.querySelector("#toggleIcon");
  const megaMenus = document.querySelectorAll(".mega_menu");
  const [menuIcon, crossIcon] = ["./menu.svg", "./close.svg"];

  toggleIcon.addEventListener("click", () => {
    const isMenuVisible = menu.classList.toggle(
      "show-links",
      !menu.classList.contains("show-links")
    );
    menu.classList.toggle("hide-links", !isMenuVisible);

    if (!isMenuVisible) {
      menu.addEventListener(
        "animationend",
        () => menu.classList.remove("hide-links"),
        { once: true }
      );
    }

    toggleIcon.src = toggleIcon.src.endsWith("menu.svg") ? crossIcon : menuIcon;

    megaMenus.forEach((megaMenu) => megaMenu.classList.remove("show"));
  });
}

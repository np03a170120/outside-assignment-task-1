export function megaMenu() {
  const navItems = document.querySelectorAll(".nav_item");

  const toggleMenu = (menu, action) => {
    action === "show"
      ? (menu.classList.remove("hide"), menu.classList.add("show"))
      : (menu.classList.add("hide"),
        menu.addEventListener(
          "animationend",
          () => menu.classList.remove("show", "hide"),
          { once: true }
        ));
  };

  navItems.forEach((item) => {
    const megaMenu = item.querySelector(".mega_menu");
    item.addEventListener("click", () => {
      document
        .querySelectorAll(".mega_menu.show")
        .forEach((openMenu) => toggleMenu(openMenu, "hide"));
      if (megaMenu && !megaMenu.classList.contains("show"))
        toggleMenu(megaMenu, "show");
    });

    megaMenu
      ?.querySelector(".mega_menu_close")
      ?.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu(megaMenu, "hide");
      });
  });
}

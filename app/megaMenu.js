export function megaMenu() {
  const navItems = document.querySelectorAll(".nav_item");

  const toggleMenu = (menu, action) => {
    if (action === "show") {
      menu.classList.remove("hide");
      menu.classList.add("show");
    } else {
      menu.classList.add("hide");
      menu.addEventListener(
        "animationend",
        () => menu.classList.remove("show", "hide"),
        { once: true }
      );
    }
  };

  navItems.forEach((item) => {
    const megaMenu = item.querySelector(".mega_menu");
    const closeBtn = megaMenu?.querySelector(".mega_menu_close");

    item.addEventListener("click", (event) => {
      document.querySelectorAll(".mega_menu.show").forEach((openMenu) => {
        if (openMenu !== megaMenu) toggleMenu(openMenu, "hide");
      });

      if (megaMenu && !megaMenu.classList.contains("show")) {
        toggleMenu(megaMenu, "show");
      }
    });

    closeBtn?.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleMenu(megaMenu, "hide");
    });
  });
}

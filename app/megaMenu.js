export function megaMenu() {
  const nav_items = document.querySelectorAll(".nav_item");

  nav_items.forEach(function (item) {
    const megaMenu = item.querySelector(".mega_menu");
    const closeButton = megaMenu?.querySelector(".mega_menu_close");

    item.addEventListener("click", function () {
      document.querySelectorAll(".mega_menu.show").forEach((openMenu) => {
        openMenu.classList.remove("show");
      });

      if (megaMenu && !megaMenu.classList.contains("show")) {
        megaMenu.classList.add("show");
      }
    });

    if (closeButton) {
      closeButton.addEventListener("click", function (event) {
        event.stopPropagation();
        megaMenu.classList.remove("show");
      });
    }
  });
}

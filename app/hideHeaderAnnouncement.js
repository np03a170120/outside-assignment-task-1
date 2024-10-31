export function hideHeaderAnnouncement() {
  const closeBtn = document.querySelector(".header_announcement_close_btn");
  const headerAnnouncement = document.querySelector(".header_announcement");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      headerAnnouncement.style.display = "none";
    });
  }
}

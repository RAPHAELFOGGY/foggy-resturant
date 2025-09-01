// Mobile nav toggle
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector(".navlist");

if (menuIcon && navList) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navList.classList.toggle("open");
  });

  window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navList.classList.remove("open");
  });
}

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

menuIcon.addEventListener("click", () => {
  mobileMenuItems.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuItems.classList.remove("active");
});
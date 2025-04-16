const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !navList.contains(e.target)) {
    navList.classList.remove("active");
  }
});

const open = document.querySelector('[name="menu-outline"]');
const close = document.querySelector('[name="close-outline"]');
const navList = document.querySelector(".main-nav-list");

open.addEventListener("click", () => {
  close.style.display = "block";
  open.style.display = "none";
  navList.style.display = "block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  navList.style.display = "none";
});

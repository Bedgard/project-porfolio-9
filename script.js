const open = document.querySelector('[name="menu-outline"]');
const close = document.querySelector('[name="close-outline"]');
const navList = document.querySelector(".main-nav-list");

open.addEventListener("click", () => {
  close.style.display = "block";
  open.style.display = "none";
  navList.style.display = "flex";
  document.body.style.overflow = "hidden";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  open.style.display = "block";
  navList.style.display = "none";
  document.body.style.overflow = "";
});

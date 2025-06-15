const open = document.querySelector('[name="menu-outline"]');
const displayOpen = window.getComputedStyle(open).display;
console.log(displayOpen);

const close = document.querySelector('[name="close-outline"]');
const navList = document.querySelector(".main-nav-list");
console.log(navList);

open.addEventListener("click", () => {
  console.log("click");
  close.style.display = "block";
  open.style.display = "none";
  navList.style.display = "flex";
});

close.addEventListener("click", () => {
  console.log("click");
  close.style.display = "none";
  open.style.display = "block";
  navList.style.display = "none";
});

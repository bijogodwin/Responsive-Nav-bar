let navBtn = document.querySelector(".navbar");
let ul = document.querySelector(".ul");

navBtn.addEventListener("click", () => {
  ul.classList.toggle("show-menu");
});

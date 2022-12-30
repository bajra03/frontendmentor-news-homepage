console.log("loaded");

const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", (e) => {
  navToggle.classList.toggle("active");
  document.body.classList.toggle("active")
})
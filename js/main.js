// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector("nav ul");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

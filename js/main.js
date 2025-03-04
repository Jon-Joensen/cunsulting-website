// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


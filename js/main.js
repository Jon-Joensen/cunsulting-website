// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  // Mobile navigation toggle
  mobileNavToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // Adjust for fixed header height
          behavior: 'smooth'
        });
        // Close mobile nav after clicking a link
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
  
  // Fade-in animations using Intersection Observer
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

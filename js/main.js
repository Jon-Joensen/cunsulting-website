document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  mobileNavToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Change header background on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for nav links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        // Close mobile nav after clicking a link
        navLinks.classList.remove('active');
      }
    });
  });

  // Fade-in animations using Intersection Observer
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.1
  };
  
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, options);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

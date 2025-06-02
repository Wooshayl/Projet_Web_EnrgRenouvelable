document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  // Toggle menu when clicking hamburger button
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('show');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnMenuToggle = menuToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnMenuToggle && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  });
});
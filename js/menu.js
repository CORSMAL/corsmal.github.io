// Mobile menu toggle and subnav toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const subnavs = document.querySelectorAll('.subnav');
  const toggleButtons = document.querySelectorAll('nav a[role="button"]');

  // Hamburger shows/hides main menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function (e) {
      navMenu.classList.toggle("active");
      if (!navMenu.classList.contains("active")) {
        subnavs.forEach(function (el) {
          el.classList.remove("open");
        });
      }
    });
  }

  // Subnav toggle for mobile (tap to open)
  toggleButtons.forEach(function (btn) {
    const parent = btn.closest(".subnav");

    // const link = subnav.querySelector('a');
    
    // if (link) {
      // link.addEventListener("click", function (e) {
       btn.addEventListener("click", function (e) {

        // Only on mobile
        if (window.innerWidth <= 900) {
          e.preventDefault();
          
          // Close other subnavs
          subnavs.forEach(function (el) {
            if (el !== parent) {
              el.classList.remove("open");
            }
          });
          parent.classList.toggle("open");

          // ARIA
        btn.setAttribute(
          "aria-expanded",
          parent.classList.contains("open") ? "true" : "false"
        );
        }
      });
    }
  // }
);

  // Close menu/subnav if clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 900 && navMenu.classList.contains("active")) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
        subnavs.forEach(function (el) {
          el.classList.remove("open");
        });
      }
    }
  });
});

// Optional: Automatically update year
document.getElementById('currentYear').textContent = new Date().getFullYear();

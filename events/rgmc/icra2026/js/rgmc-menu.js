document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".rgmc-nav");
  if (!nav) return;

  const menuToggle = nav.querySelector(".menu-toggle");
  const menu = nav.querySelector("#rgmc-navigation");
  const subnavs = nav.querySelectorAll(".subnav");
  const mobile = window.matchMedia("(max-width: 1024px)");

  function closeSubnavs() {
    subnavs.forEach(function (subnav) {
      subnav.classList.remove("open");
      subnav.querySelector("button").setAttribute("aria-expanded", "false");
    });
  }

  function closeMenu() {
    menu.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    closeSubnavs();
  }

  menuToggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) closeSubnavs();
  });

  subnavs.forEach(function (subnav) {
    const button = subnav.querySelector("button");

    button.addEventListener("click", function () {
      const wasOpen = subnav.classList.contains("open");
      closeSubnavs();

      if (!wasOpen) {
        subnav.classList.add("open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!nav.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    const openSubnav = nav.querySelector(".subnav.open");
    if (openSubnav) {
      const button = openSubnav.querySelector("button");
      closeSubnavs();
      button.focus();
    } else if (menu.classList.contains("active")) {
      closeMenu();
      menuToggle.focus();
    }
  });

  mobile.addEventListener("change", closeMenu);

  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = new Date().getFullYear();
});
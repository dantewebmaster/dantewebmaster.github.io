let lastKnownScrollPosition = 0;
let ticking = false;

const navContainer = document.querySelector("#nav-container");
const mobileMenuToggle = document.querySelector(".menu-toggle");

const menuLinks = document.querySelectorAll(".menu-link");
const siteNav = document.querySelector("#site-navigation");
const navMenu = document.querySelector("#nav-menu");

function watchScrollPosition(scrollPos) {
  if (scrollPos >= 660) {
    navContainer.classList.add("nav-dark");
  } else {
    navContainer.classList.remove("nav-dark");
  }

  if (scrollPos >= 600) {
    mobileMenuToggle.classList.add("menu-toggle-dark");
  } else {
    mobileMenuToggle.classList.remove("menu-toggle-dark");
  }
}

document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      watchScrollPosition(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

menuLinks.forEach((item) =>
  item.addEventListener("click", () => {
    siteNav.classList.remove("toggled");

    mobileMenuToggle.setAttribute("aria-expanded", false);
    navMenu.setAttribute("aria-expanded", false);
  })
);

const actualYear = new Date().getFullYear();
document.querySelector(".date-year").innerHTML = actualYear;

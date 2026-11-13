(() => {
  const header = document.querySelector("#site-header");
  const nav = document.querySelector("#site-navigation");
  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelectorAll(".nav-link");
  const toTop = document.querySelector("#to-top");
  const yearEl = document.querySelector(".date-year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  let ticking = false;
  const updateOnScroll = () => {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle("scrolled", y > 24);
    }
    if (toTop) {
      toTop.classList.toggle("visible", y > 400);
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateOnScroll();

  if (menuToggle && nav) {
    const setMenuOpen = (isOpen) => {
      nav.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = !nav.classList.contains("open");
      setMenuOpen(isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenuOpen(false);
      }
    });
  }
})();


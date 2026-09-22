const CALENDLY_URL =
  "https://calendly.com/marinatfe5?hide_gdpr_banner=1&background_color=fffaf3&text_color=14221c&primary_color=1c3d34";

function openCalendlyPopup(event) {
  event.preventDefault();

  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    return;
  }

  window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
}

function setupBookingButtons() {
  document.querySelectorAll("[data-calendly-popup]").forEach((button) => {
    button.addEventListener("click", openCalendlyPopup);
  });
}

function setupMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupBookingButtons();
  setupMobileNav();
});

const CALENDLY_URL =
  "https://calendly.com/marinatfe5?hide_gdpr_banner=1&background_color=fcfaf6&text_color=17171a&primary_color=8b79a6";

function openCalendlyPopup(event) {
  event.preventDefault();

  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    return;
  }

  window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-calendly-popup]").forEach((button) => {
    button.addEventListener("click", openCalendlyPopup);
  });
});

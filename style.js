// Donny Satriadi - Portfolio Landing Page
document.addEventListener("DOMContentLoaded", () => {
  const landingLoader = document.getElementById("landingLoader");
  if (landingLoader) {
    setTimeout(() => {
      landingLoader.style.opacity = "0";
      landingLoader.style.pointerEvents = "none";
      setTimeout(() => landingLoader.remove(), 400);
    }, 600);
  }
});

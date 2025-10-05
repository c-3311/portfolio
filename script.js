// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Simple router
function navigateTo(page) {
  location.hash = page;
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => page.classList.remove("active"));

  const target = document.getElementById(pageId);
  if (target) target.classList.add("active");

  // Highlight active link
  document.querySelectorAll(".nav-item").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + pageId);
  });
}

// Listen for route changes
window.addEventListener("hashchange", () => {
  const pageId = location.hash.replace("#", "") || "home";
  showPage(pageId);
});

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  const pageId = location.hash.replace("#", "") || "home";
  showPage(pageId);
});

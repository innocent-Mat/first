document.addEventListener("DOMContentLoaded", () => {

  // Load header
  fetch("header.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("header").innerHTML = html;
      initHeader();
    });

  // Load footer
  fetch("footer.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    });

});

function initHeader() {

  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Active link
  const links = document.querySelectorAll(".nav-link");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Function to set active link based on current URL
function setActiveLink() {
  const currentPath = window.location.href;
  document.querySelectorAll(".secondary-nav_ul a").forEach((link) => {
    if (currentPath === link.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Call setActiveLink on page load
window.addEventListener("load", setActiveLink);

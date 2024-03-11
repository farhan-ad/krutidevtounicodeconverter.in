function setActiveLink() {
  let currentPath = window.location.href;
  // Normalize the currentPath to handle the domain or home page without index.html
  const baseUrl = window.location.origin + "/";
  const homePageEndings = ["index.html", ""];

  if (homePageEndings.some((ending) => currentPath.endsWith(ending))) {
    currentPath = baseUrl;
  }

  document.querySelectorAll(".secondary-nav_ul a").forEach((link) => {
    // Normalize the link href for a direct comparison
    let linkHref = link.getAttribute("href");
    if (linkHref === "index.html" || linkHref === "") {
      linkHref = baseUrl;
    } else {
      linkHref = new URL(linkHref, baseUrl).href;
    }

    if (currentPath === linkHref) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Call setActiveLink on page load and on history state changes
window.addEventListener("load", setActiveLink);
window.addEventListener("popstate", setActiveLink);

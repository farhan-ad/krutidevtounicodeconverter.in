function setActiveLink() {
  let currentPath = window.location.href;
  // Normalize the currentPath to handle the domain, home page, or any subdirectory without explicitly naming index.html
  const baseUrl = window.location.origin + window.location.pathname;
  const homePageEndings = ["index.html", "/"];

  // Ensure the base URL does not include a file name
  const normalizedBaseUrl = baseUrl.endsWith("/")
    ? baseUrl
    : baseUrl.substring(0, baseUrl.lastIndexOf("/") + 1);

  if (homePageEndings.some((ending) => currentPath.endsWith(ending))) {
    currentPath = normalizedBaseUrl;
  }

  document.querySelectorAll(".secondary-nav_ul a").forEach((link) => {
    // Normalize the link href for a direct comparison
    let linkHref = link.getAttribute("href");
    if (linkHref === "index.html" || linkHref === "/") {
      linkHref = normalizedBaseUrl;
    } else {
      // Ensure the link is compared as an absolute URL
      linkHref = new URL(linkHref, normalizedBaseUrl).href;
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

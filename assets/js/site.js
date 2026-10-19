// Theme toggle: flips data-theme on <html> and remembers the choice.
(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  button.addEventListener("click", function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

// CV page: "Save as PDF" opens the print dialog with the print stylesheet.
(function () {
  var button = document.querySelector("[data-print]");
  if (button) button.addEventListener("click", function () { window.print(); });
})();

// Publications: [BibTeX] shows or hides the citation block under the links.
(function () {
  document.querySelectorAll(".pub-bib-toggle").forEach(function (button) {
    var block = document.getElementById(button.getAttribute("aria-controls"));
    if (!block) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      block.hidden = open;
    });
  });
})();

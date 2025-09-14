// Smooth scrolling (your existing code)
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute("href"));

//     if (target) {
//       target.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });

// Header color change on scroll — works for .scrollContainer or window fallback
(function () {
  const header = document.querySelector(".headerContainer");
  if (!header) return;

  const scrollContainer = document.querySelector(".scrollContainer") || window;

  function updateHeaderBackground() {
    const scrolled =
      scrollContainer === window
        ? window.scrollY > 0
        : scrollContainer.scrollTop > 0;

    header.classList.toggle("scrolled", scrolled);
  }

  // initial state
  updateHeaderBackground();

  // attach listener (use passive option)
  if (scrollContainer === window) {
    window.addEventListener("scroll", updateHeaderBackground, {
      passive: true,
    });
  } else {
    scrollContainer.addEventListener("scroll", updateHeaderBackground, {
      passive: true,
    });
  }
})();

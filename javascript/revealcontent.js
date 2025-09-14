// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");

      // For staggered children, add revealed class with delay
      if (entry.target.classList.contains("stagger-children")) {
        const children = entry.target.querySelectorAll(
          ".reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale"
        );
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add("revealed");
          }, index * 200);
        });
      }

      // Unobserve after animation to prevent re-triggering
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with reveal classes (exclude home section)
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".reveal-content, .reveal-fade-up, .reveal-fade-down, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-rotate, .stagger-children"
  );

  revealElements.forEach((el) => {
    observer.observe(el);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Optional: Re-trigger animations on scroll up (if you want them to repeat)
const observerRepeat = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      } else {
        // Uncomment the next line if you want animations to repeat when scrolling back up
        // entry.target.classList.remove('revealed');
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  }
);

// Performance: Throttle scroll events
let ticking = false;
function updateAnimations() {
  // Any additional scroll-based animations can go here
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateAnimations);
    ticking = true;
  }
});

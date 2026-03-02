// ================================
// MOBILE NAV TOGGLE
// ================================
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// ================================
// HEADER SCROLL SHADOW
// ================================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ================================
// SCROLL REVEAL OBSERVER
// ================================
const reveals = document.querySelectorAll(
  ".reveal, .reveal-fast, .reveal-left, .reveal-right, .reveal-zoom"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px",
  }
);

reveals.forEach((reveal) => observer.observe(reveal));

// ================================
// HERO BACKGROUND SLIDESHOW (homepage only)
// ================================
const hero = document.querySelector(".hero");

if (hero) {
  const images = [
    "assets/images/workspace/fqqrym.webp",
    "assets/images/workspace/gn7222.webp",
    "assets/images/workspace/hp67mb.webp",
    "assets/images/workspace/nudn36.webp",
    "assets/images/workspace/ytkk3x.webp",
    "assets/images/workspace/7dagbe.jpg",
  ];

  let current = 0;
  hero.style.backgroundImage = `url(${images[0]})`;

  // Preload remaining images
  images.slice(1).forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  setInterval(() => {
    current = (current + 1) % images.length;
    hero.style.backgroundImage = `url(${images[current]})`;
  }, 5000);
}
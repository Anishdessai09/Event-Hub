// Wrap in DOMContentLoaded to ensure elements exist
document.addEventListener("DOMContentLoaded", () => {
  // ======== Mobile Menu Toggle (guarded) ========
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // ======== Hero Slider (guarded) ========
  let slideIndex = 0;
  const slides = document.querySelectorAll(".hero-slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  if (slides.length > 0) {
    // initialize first slide
    showSlide(slideIndex);

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
      });
    }

    // Auto slide every 4 seconds
    setInterval(() => {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }, 4000);
  }

  // ======== Category Tabs (guarded) ========
  const tabButtons = document.querySelectorAll(".tab-btn");
  const eventSections = document.querySelectorAll(".event-section");
  if (tabButtons.length > 0 && eventSections.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        eventSections.forEach(sec => sec.classList.remove("active"));

        btn.classList.add("active");
        const target = document.getElementById(btn.dataset.target);
        if (target) target.classList.add("active");
      });
    });
  }

  // ======== Join Event Buttons (guarded) ========
  const joinButtons = document.querySelectorAll(".join-btn");
  if (joinButtons.length > 0) {
    joinButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Event registration feature is coming soon!");
      });
    });
  }
});

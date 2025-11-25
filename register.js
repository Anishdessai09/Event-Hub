// ========== BOOKMARK TOGGLE ==========
const bookmarkBtn = document.querySelector(".bookmark-btn");
let bookmarked = false;

bookmarkBtn.addEventListener("click", () => {
  bookmarked = !bookmarked;
  bookmarkBtn.innerHTML = bookmarked ? "✅" : "⭐";
  bookmarkBtn.style.boxShadow = bookmarked
    ? "0 0 15px rgba(255,200,0,0.8)"
    : "0 0 0 transparent";
});

// ========== SHARE BUTTON ==========
const shareBtn = document.querySelector(".share-btn");
shareBtn.addEventListener("click", async () => {
  const pageUrl = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Event Link",
        text: "Check out this event!",
        url: pageUrl
      });
    } catch (err) {
      console.log("Share canceled:", err);
    }
  } else {
    navigator.clipboard.writeText(pageUrl);
    shareBtn.innerHTML = "📋";
    setTimeout(() => (shareBtn.innerHTML = "🔗"), 1200);
  }
});

// ========== BUTTON CLICK ANIMATION ==========
const primaryBtn = document.querySelector(".primary-btn");
primaryBtn.addEventListener("click", () => {
  primaryBtn.style.transform = "scale(0.95)";
  setTimeout(() => primaryBtn.style.transform = "scale(1)", 150);
});

// ========== SCROLL FADE ANIMATION ==========
const fadeElements = document.querySelectorAll(
  ".info-card, .event-about, .event-highlights, .event-coordinator"
);

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.90;

  fadeElements.forEach(el => {
    const box = el.getBoundingClientRect().top;
    if (box < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0px)";
    }
  });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", () => {
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
  });
  checkVisibility();
});

// ========== DIRECT REGISTER BUTTON ==========
primaryBtn.addEventListener("click", () => {
  alert("Redirecting to Event Registration...");
  // Later: Replace with actual registration link from Supabase
});

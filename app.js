// Debounce utility function
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Navigation scroll handler
const nav = document.querySelector("nav");

if (nav) {
  const handleScroll = debounce(() => {
    nav.classList.toggle("scrolled", window.scrollY > 0);
  }, 10);

  window.addEventListener("scroll", handleScroll, { passive: true });
}
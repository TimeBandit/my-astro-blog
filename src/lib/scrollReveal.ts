const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Check on initial load
});

window.addEventListener("beforeunload", () => {
  setTimeout(() => {
    revealOnScroll();
  }, 100);
});

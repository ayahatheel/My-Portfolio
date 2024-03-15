// nav

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// mouse
document.addEventListener('DOMContentLoaded', function () {
  const arrow = document.getElementById('mouseIcon');
  
  setInterval(() => {
    mouseIcon.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        mouseIcon.style.transform = 'translateY(0)';
      }, 500);
  }, 1000);
});

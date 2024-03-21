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

//sroll
window.addEventListener('scroll', function() {
  var mySkillsSection = document.getElementById('MYSKILLS');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 200) {
      mySkillsSection.style.opacity = 1;
      mySkillsSection.style.visibility = 'visible';
  } else {
      mySkillsSection.style.opacity = 0;
      mySkillsSection.style.visibility = 'hidden';
  }
});


//sroll



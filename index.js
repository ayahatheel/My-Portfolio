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
  var cardsContainer = document.querySelector('.cards');

  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  var mySkillsPosition = mySkillsSection.offsetTop;
  var cardsPosition = cardsContainer.offsetTop;

  var buffer = 200; 

  // MYSKILLS Section
  if (scrollPosition + buffer > mySkillsPosition) {
      mySkillsSection.style.opacity = 1;
      mySkillsSection.style.transform = 'translateY(0)';
      mySkillsSection.style.visibility = 'visible';
  } else {
      mySkillsSection.style.opacity = 0;
      mySkillsSection.style.transform = 'translateY(20px)';
      mySkillsSection.style.visibility = 'hidden';
  }


  // Cards Section
  if (scrollPosition + buffer > cardsPosition) {
      cardsContainer.style.opacity = 1;
      cardsContainer.style.transform = 'translateY(0)';
      cardsContainer.style.visibility = 'visible';
  } else {
      cardsContainer.style.opacity = 0;
      cardsContainer.style.transform = 'translateY(20px)';
      cardsContainer.style.visibility = 'hidden';
  }
});


// linking THE NAV WITH THE SETIONS
// function smoothScroll(targetSelector, duration) {
//   const target = document.querySelector(targetSelector);
//   const targetPosition = target.getBoundingClientRect().top;
//   const startPosition = window.pageYOffset;
//   const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

//   const easeInOutQuad = (time, start, change, duration) => {
//       time /= duration / 2;
//       if (time < 1) return change / 2 * time * time + start;
//       time--;
//       return -change / 2 * (time * (time - 2) - 1) + start;
//   };

//   const animateScroll = currentTime => {
//       const timeElapsed = currentTime - startTime;
//       const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animateScroll);
//   };

//   requestAnimationFrame(animateScroll);
// }


// theme modes
document.getElementById('toggleTheme').addEventListener('click', function() {
  var themeStylesheet = document.getElementById('themeStylesheet');
  var currentTheme = themeStylesheet.getAttribute('href');
  
  if (currentTheme.includes('dark-mode.css')) {
      themeStylesheet.setAttribute('href', 'light-mode.css');
  } else {
      themeStylesheet.setAttribute('href', 'dark-mode.css');
  }
});

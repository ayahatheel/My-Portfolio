// !!!!!!!!!!! nav

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
// ! imges load
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = document.querySelectorAll('img[data-src]');
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(function(img) {
    observer.observe(img);
  });
});
//!!!!!! mouse
document.addEventListener('DOMContentLoaded', function () {
    const arrow = document.getElementById('mouseIcon2');
    
    setInterval(() => {
      mouseIcon2.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          mouseIcon2.style.transform = 'translateY(0)';
        }, 500);
    }, 1000);
  });
  

//!!!!!! sroll

// window.addEventListener('scroll', function() {
//   var mySkillsSection = document.getElementById('MYSKILLS');
// //   var cardsContainer = document.querySelector('.cards');
//   // var workSection = document.querySelector('.work'); // Get the work section

//   var scrollPosition = window.scrollY || document.documentElement.scrollTop;

//   var mySkillsPosition = mySkillsSection.offsetTop;
// //   var cardsPosition = cardsContainer.offsetTop;
//   // var workPosition = workSection.offsetTop; // Get the offset top of the work section

//   var buffer = 200; 

//   // MYSKILLS Section
// //   if (scrollPosition + buffer > mySkillsPosition) {
// //       mySkillsSection.style.opacity = 1;
// //       mySkillsSection.style.transform = 'translateY(0)';
// //       mySkillsSection.style.visibility = 'visible';
// //   } else {
// //       mySkillsSection.style.opacity = 0;
// //       mySkillsSection.style.transform = 'translateY(20px)';
// //       mySkillsSection.style.visibility = 'hidden';
// //   }

//   // Cards Section
// //   if (scrollPosition + buffer > cardsPosition) {
// //       cardsContainer.style.opacity = 1;
// //       cardsContainer.style.transform = 'translateY(0)';
// //       cardsContainer.style.visibility = 'visible';
// //   } else {
// //       cardsContainer.style.opacity = 0;
// //       cardsContainer.style.transform = 'translateY(20px)';
// //       cardsContainer.style.visibility = 'hidden';
// //   }

//   // Work Section
//   // if (scrollPosition + buffer > workPosition) {
//   //     workSection.style.opacity = 1;
//   //     workSection.style.transform = 'translateY(0)';
//   //     workSection.style.visibility = 'visible';
//   // } else {
//   //     workSection.style.opacity = 0;
//   //     workSection.style.transform = 'translateY(20px)';
//   //     workSection.style.visibility = 'hidden';
//   // }

// });



//!!!!! theme modes
document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('themeStylesheet');
  const toggleThemeNav = document.getElementById('toggleThemeNav');
  const toggleThemeMenuBar = document.getElementById('toggleThemeMenuBar');

  function toggleTheme() {
      if (themeStylesheet.href.includes('dark-mode.css')) {
          themeStylesheet.href = 'light-mode.css';
          toggleThemeNav.textContent = 'Dark Mode';
          toggleThemeMenuBar.textContent = 'Dark Mode';
      } else {
          themeStylesheet.href = 'dark-mode.css';
          toggleThemeNav.textContent = 'Light Mode';
          toggleThemeMenuBar.textContent = 'Light Mode';
      }
  }

  toggleThemeNav.addEventListener('click', toggleTheme);
  toggleThemeMenuBar.addEventListener('click', toggleTheme);
});

// ! slider


// document.addEventListener('DOMContentLoaded', () => {
//   const slides = document.querySelectorAll('.slide');
//   let index = 0;

//   function showSlide(i) {
//     index = i;
//     if (index >= slides.length) index = 0;
//     if (index < 0) index = slides.length - 1;
//     document.getElementById('slider').style.transform = `translateX(-${index * 100}%)`;
//   }

//   document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));
//   document.getElementById('next').addEventListener('click', () => showSlide(index + 1));

//   // Optional: Auto-slide
//   setInterval(() => showSlide(index + 1), 3000); // Change slides every 3 seconds
// });


// !!!!! contact me

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = this;
  const data = new FormData(form);
  const action = form.action;

  fetch(action, {
      method: 'POST',
      body: data,
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          document.getElementById('submit-message').textContent = 'Your message has been submitted. Thank you!';
          form.reset(); // Reset the form fields
      } else {
          document.getElementById('submit-message').textContent = 'There was an error submitting your message. Please try again.';
      }
  })
  .catch(error => {
      document.getElementById('submit-message').textContent = 'An error occurred. Please try again.';
  });
});

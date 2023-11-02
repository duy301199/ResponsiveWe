function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ABOUT CONTENT */
const about_content = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.about-content');

    if (entry.isIntersecting) {
      square.classList.add('text-focus-in');
      
      // Trigger animation for about_img here
      animateAboutImg();
      
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('text-focus-in');
  });
});
about_content.observe(document.querySelector('.about-title'));

// Function to animate about_img
function animateAboutImg() {
  const about_img = document.querySelector('.about_pic-container');
  about_img.classList.add('scale-up-center');
  
}
/* ABOUT IMG */
const about_img = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.about_pic-container');

    if (entry.isIntersecting) {
      square.classList.add('scale-up-center');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('scale-up-center');
  });
});
about_img.observe(document.querySelector('.about-wrapper'));



/* PROFILE IMG */
const profile_img = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.section_pic-container img');

    if (entry.isIntersecting) {
      square.classList.add('border-radius-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('border-radius-animation');
  });
});
profile_img.observe(document.querySelector('.section_pic-container'));



/* PROJECT */
const project_content = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.project-content');

    if (entry.isIntersecting) {
      square.classList.add('text-focus-in');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('text-focus-in');
  });
});
project_content.observe(document.querySelector('.project-main'));


/* CONTACT */
const contact_content = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.contact-title');

    if (entry.isIntersecting) {
      square.classList.add('bounce-in-top');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('bounce-in-top');
  });
});
contact_content.observe(document.querySelector('.contact-wrap'));

const contact_email = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.contact-info-container');

    if (entry.isIntersecting) {
      square.classList.add('text-focus-in');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('text-focus-in');
  });
});
contact_email.observe(document.querySelector('.contact-info-upper-container'));




/* SWIPER */
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    },
    1560: {
      slidesPerView: 3
    }
  }
});




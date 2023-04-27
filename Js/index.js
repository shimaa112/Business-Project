  const logo = document.getElementById('logo');
  const navbar = document.getElementById('navbar');
  const social1= document.getElementById('social-1');
  const social2 = document.getElementById('social-2');
  const social3 = document.getElementById('social-3');

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) { 
    logo.src = '../Assets/logo-dark.png';
    navbar.classList.add('navbar-scrolled');
    social1.classList.add('social-scrolled');
    social2.classList.add('social-scrolled');
    social3.classList.add('social-scrolled');
  } else {
    logo.src = '../Assets/logo-light.png';
      navbar.classList.remove('navbar-scrolled');
      social1.classList.remove('social-scrolled');
      social2.classList.remove('social-scrolled');
      social3.classList.remove('social-scrolled');
  }
});

var swiper = new Swiper('.rate-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
loop:true,
  autoplay: {
    delay: 3000,
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints:{
    // when window width is >= 640px
    320: {
      width: 320,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    480: {
      width: 480,
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640:{
      width: 640,
      slidesPerView: 2,
      spaceBetween: 40,
    },
    980:{
      width: 980,
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});


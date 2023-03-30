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
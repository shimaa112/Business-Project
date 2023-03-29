  // Set the threshold for when to change 
  const threshold = 200;

  // Get a reference to the element
  const logo = document.getElementById('logo');

  const navbar = document.getElementById('navbar');

  const social1= document.getElementById('social-1');
  const social2 = document.getElementById('social-2');
  const social3 = document.getElementById('social-3');

  // Add a scroll event listener to the window
  window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user has scrolled beyond the threshold
    if (scrollY > threshold) {
      
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


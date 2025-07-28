  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-link');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



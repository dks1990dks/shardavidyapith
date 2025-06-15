

 const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('nav').querySelector('ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
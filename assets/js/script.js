const toggleMenu = () => {
  const menu = document.querySelector('.mobile-menu');
  menu.classList.toggle('active');
};

document.querySelector('.menu-button')?.addEventListener('click', toggleMenu);


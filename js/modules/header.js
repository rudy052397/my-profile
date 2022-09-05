const header = () => {
  const menuIcon = document.querySelector('.menu__icon');
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav')
  const menuHamburger = document.querySelector('.menu--hamburger');
  const menuLink = document.querySelectorAll('.menu__link');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('nav--menu-open');
    header.classList.add('bg-black');
  });

  menuHamburger.addEventListener('transitionend', () => {
    if (!nav.classList.contains('nav--menu-open')) {
      header.classList.remove('bg-black');
    }
  });

  for (const item of menuLink) {
    item.addEventListener('click', ()=>{
      nav.classList.remove('nav--menu-open');
    });
  }
  
}


export default header;
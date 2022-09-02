'use strict';

const documentReady = () => {
  const menuIcon = document.querySelector('.menu__icon');
  menuIcon.addEventListener('click', () => {
    const menuHamburger = document.querySelector('.menu--hamburger')
    menuHamburger.classList.toggle('menu--hamburger-despleged');
    const header = document.querySelector('header');
    header.style.backgroundColor='black';
  });
  const header = document.querySelector('header');
  header.addEventListener('transitionend',()=>{
    if (!header.classList.contains('header-despleged')){
      header.style.backgroundColor='var(--primary-shadow-color)';
    }
  });

};

document.addEventListener('DOMContentLoaded', documentReady);
"use strict";

const hamburger = document.querySelector('.burger-menu');
const nav =  document.querySelector('.header__nav');
const navList = document.querySelector('.header__nav-list');
const links = document.querySelectorAll('.header__nav-list-link');
const body = document.querySelector('body');
const shadow = document.querySelector('.shadow-block');
const btnTop = document.querySelector('.button-top');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

const changeMenu = function() {
  navList.classList.toggle('open');
  hamburger.classList.toggle('rotate');
  body.classList.toggle('overflow');
  shadow.classList.toggle('shadow-open');
  shadow.classList.toggle('shadow-inin');
}

hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    changeMenu();
});

links.forEach(function(e) {
    e.addEventListener('click', function() {
        if (document.body.clientWidth < 651 ) {
            changeMenu();
        }
    })
})

document.addEventListener('click', function(e) {
    const target = e.target;
    const menu = target == navList || navList.contains(target);
    const burgerMenu = target == hamburger;
    const navListOpen = navList.classList.contains('open');
    
    if (!menu && !burgerMenu && navListOpen) {
        changeMenu();
    }
});
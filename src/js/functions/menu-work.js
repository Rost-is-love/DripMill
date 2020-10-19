const menu = document.querySelector('.nav')
const media = document.querySelector('.media')
const menuOpen = document.querySelector('.menu-open-btn')
const menuClose = document.querySelector('.menu-close')

menuOpen.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.add('menu-open'); 
  media.classList.add('menu-open'); 
  menuClose.classList.add('menu-open'); 
});

menuClose.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.remove('menu-open'); 
  media.classList.remove('menu-open'); 
  menuClose.classList.remove('menu-open'); 
}); 
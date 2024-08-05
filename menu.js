document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
  
    burger.addEventListener('click', function () {
      menu.classList.toggle('menu-open');
    });
  });
  
var menuTrigger = document.querySelector('.js-mobile-menu-trigger');
var mainMenu = document.querySelector('.js-menu');
var activeClass = 'menu--active';

menuTrigger.addEventListener('click', function() {
    if (mainMenu.classList.contains(activeClass)) {
        mainMenu.classList.remove(activeClass);
    } else {
        mainMenu.classList.add(activeClass);
    }
});

window.addEventListener('load', function() {
    mainMenu.style.transition = 'transform 200ms cubic-bezier(0, 0.82, 0.58, 1)';
});

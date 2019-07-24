var menuTrigger = document.querySelector('.js-mobile-menu-trigger');

menuTrigger.addEventListener('click', function() {
    var mainMenu = document.querySelector('.js-menu');
    var activeClass = 'menu--active';

    if (mainMenu.classList.contains(activeClass)) {
        mainMenu.classList.remove(activeClass);
    } else {
        mainMenu.classList.add(activeClass);
    }
});

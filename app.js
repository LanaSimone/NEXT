const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active'); // Remove the dot before 'is.active'
    menuLinks.classList.toggle('active');
});

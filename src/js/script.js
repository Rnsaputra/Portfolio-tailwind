//navbar fixed

window.addEventListener('scroll', function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("navbar-fixed", window.scrollY)
})

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})
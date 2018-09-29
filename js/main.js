//Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.toggle("close");
        menu.classList.toggle("show");
        menuNav.classList.toggle("show");
        menuBranding.classList.toggle("show");
        navItems.forEach(item => item.classList.toggle("show"));
    }
    showMenu = !showMenu;
}
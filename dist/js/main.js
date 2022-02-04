/* Toggle  functionalty to nav */
const menuBtn = document.querySelector(".menu-btn");
const humburger = document.querySelector(".menu-btn__burger");

// used to display nav menu
const menuNav = document.querySelector(".menu-nav");
const navBar = document.querySelector(".nav");

// used to display nav menu item  (LINKS)
const menuNavItems = document.querySelectorAll(".menu-nav__item");




// add toggle functionalty to humburger button
function toggleMenu() {
    if (humburger.classList.contains('open')) {
        humburger.classList.remove('open')

        menuNav.classList.remove('open')
        navBar.classList.remove('open')

        menuNavItems.forEach(item => {
            item.classList.remove('open')
        })

    } else {
        humburger.classList.add('open')
        menuNav.classList.add('open')
        navBar.classList.add('open')

        menuNavItems.forEach(item => {
            item.classList.add('open')
        })
    }
}

// change the header background color on scroll

function changeHeaderBgClr() {
    if (window.scrollY > 90) {
        menuNav.style.backgroundColor = "#242424";
        menuNav.style.borderBottom = "1px solid";
    } else {
        menuNav.style.borderBottom = "none";
        menuNav.style.backgroundColor = "transparent";

    }



}

// event listeners
menuBtn.addEventListener('click', toggleMenu)
document.addEventListener('scroll', changeHeaderBgClr)
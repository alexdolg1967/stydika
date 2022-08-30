import { CartNavEject } from "./components/cart-nav";

window.addEventListener("resize", CartNavEject);

window.addEventListener("scroll", headerSticky);

const navbar = document.querySelector(".header-bottom");

let sticky = navbar.offsetTop;

function headerSticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelector(".top-menu__list");
    const navItemActive = navItems.querySelector(".link-active");
    if (!navItemActive) {
        return;
    }
    const navItemsRect = navItems.getBoundingClientRect();
    const navItemActiveRect = navItemActive.getBoundingClientRect();
    const navItemsLeft =
        navItemActiveRect.left -
        navItemsRect.left +
        (navItemActiveRect.width - navItemsRect.width) / 2;
    navItems.scrollLeft = navItemsLeft;
});

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 500) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

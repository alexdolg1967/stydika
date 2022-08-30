export const CartNavEject = () => {
    const width = window.innerWidth;
    if (width < 1024) {
        const cartNav = document.querySelector(".cart-nav");
        const navEject = document.getElementById("nav-eject");

        navEject.addEventListener("click", () => {
            cartNav.classList.toggle("nav--active");
        });
    }
};

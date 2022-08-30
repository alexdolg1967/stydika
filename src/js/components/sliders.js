import Swiper, { Pagination } from "swiper";
Swiper.use([Pagination]);
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("resize", () => {
        InitSwiper();
    });

    function InitSwiper() {
        const width = window.innerWidth;
        if (width < 1024) {
            const swiper = new Swiper(".specialties__slider", {
                loop: false,
                spaceBetween: 16,
                speed: 1400,
                lazy: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }

    InitSwiper();
});

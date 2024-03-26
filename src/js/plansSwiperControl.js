import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

export default () => {
    const plansSwiperBox = document.querySelector('.js-plans-main-swiper');
    const btns = document.querySelectorAll('.plan-layouts__button[data-layout]');
    const links = document.querySelectorAll('.location-section__nav-link[data-plan]');

    if(btns.length > 0) {
        Array.from(btns).forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                Array.from(btns).forEach((b) => {
                    b.classList.remove('plan-layouts__button--active');
                    b.classList.add('plan-layouts__button--shadowed');
                })

                btn.classList.remove('plan-layouts__button--shadowed');
                btn.classList.add('plan-layouts__button--active')
            })
        })
    }

    if(links.length > 0) {
        Array.from(links).forEach((link) => {
            link.addEventListener('click', () => {
                Array.from(links).forEach((l) => {
                    l.classList.remove('location-section__nav-link--active');
                })

                link.classList.add('location-section__nav-link--active')
            })
        })
    }

    if(plansSwiperBox) {
        const plansSwiper = new Swiper('.js-plans-main-swiper', {
            speed: 1000,
            navigation: {
                nextEl: '.plan-layouts__swiper-right-button',
                prevEl: '.plan-layouts__swiper-left-button',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
                dynamicBullets: true,
                dynamicMainBullets: 3,
            },
        })
    }
}
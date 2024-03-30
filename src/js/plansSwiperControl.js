import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';

export default () => {
    const plansSwiperBoxes = document.querySelectorAll('.js-plans-main-swiper');
    const btns = document.querySelectorAll('.plan-layouts__button[data-layout]');
    const links = document.querySelectorAll('.location-section__nav-link[data-plan]'); 

    if(links.length > 0) {
        const plans = document.querySelectorAll('.plan-layouts__plans');
        
        Array.from(links).forEach((link) => {
            link.addEventListener('click', (e) => {

                Array.from(btns).forEach((b) => {
                    b.classList.remove('plan-layouts__button--active');
                    b.classList.remove('plan-layouts__button--shadowed');
                })

                Array.from(links).forEach((l) => {
                    l.classList.remove('location-section__nav-link--active');
                })

                link.classList.add('location-section__nav-link--active');
                const planById = document.getElementById(link.dataset.plan);

                if (planById) {
                    plans.forEach((plan) => {
                        plan.classList.add('plan-layouts__plans--hidden');
                    })

                    planById.classList.remove('plan-layouts__plans--hidden');

                    const layouts = document.querySelectorAll('.plan-layouts__swiper-box');
                    layouts.forEach((layout) => {
                        layout.classList.add('plan-layouts__swiper-box--hidden');
                    })
                    
                    document.getElementById(planById.querySelectorAll('.plan-layouts__button')[0].dataset.layout)
                        .classList.remove('plan-layouts__swiper-box--hidden');
                }
            })
        })
    }

    if(btns.length > 0) {
        const layouts = document.querySelectorAll('.plan-layouts__swiper-box');

        Array.from(btns).forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                Array.from(btns).forEach((b) => {
                    b.classList.remove('plan-layouts__button--active');
                    b.classList.add('plan-layouts__button--shadowed');
                })

                btn.classList.remove('plan-layouts__button--shadowed');
                btn.classList.add('plan-layouts__button--active');

                const layoutById = document.getElementById(btn.dataset.layout);

                if (layoutById) {
                    layouts.forEach((layout) => {
                        layout.classList.add('plan-layouts__swiper-box--hidden');
                    })

                    layoutById.classList.remove('plan-layouts__swiper-box--hidden');
                }
            })
        })
    }

    if(plansSwiperBoxes.length > 0) {
        plansSwiperBoxes.forEach((plansSwiperBox) => {
            const plansSwiper = new Swiper(plansSwiperBox, {
                speed: 1000,

                navigation: {
                    nextEl: plansSwiperBox.querySelector('.plan-layouts__swiper-right-button'),
                    prevEl: plansSwiperBox.querySelector('.plan-layouts__swiper-left-button'),
                },

                pagination: {
                    el: ".swiper-pagination",
                    clickable: false,
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                },
            })
        })
    }
}
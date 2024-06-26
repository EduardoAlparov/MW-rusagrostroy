import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';
import { IS_MOBILE } from './utils';

export default () => {
    const cards = document.querySelectorAll('.peculiarity-card');
    const navBtnsWrappers = document.querySelectorAll('.js-navs-btns-wrapper');
    const peculiaritiesSwiperBoxes = document.querySelectorAll('.js-peculiarities-swiper');
    const hoverOverlay = document.querySelector('.peculiarities-section__hover-overlay');
    const parBody = document.querySelector('.peculiarities-section__body');
    const controls = document.querySelector('.peculiarities-section__carousel-buttons');
    
    if(cards.length > 0) {
        Array.from(cards).forEach((card) => {
            card.addEventListener('click', (e) => {
                if(e.target.closest('.peculiarity-card__button')) {
                    card.classList.toggle('peculiarity-card--active');
                }
            })
        })
    }

    if(peculiaritiesSwiperBoxes.length) {
        peculiaritiesSwiperBoxes.forEach((peculiaritiesSwiperBox) => {
            const peculiaritiesSwiper = new Swiper(peculiaritiesSwiperBox, {
                slidesPerView: 1.15,
                spaceBetween: 20,
    
                navigation: {
                    nextEl: peculiaritiesSwiperBox.querySelector('.peculiarities-swiper-right-button'),
                    prevEl: peculiaritiesSwiperBox.querySelector('.peculiarities-swiper-left-button'),
                },
    
                breakpoints: {
                    640: {
                        slidesPerView: 2.1,
                        spaceBetween: 30,
                    },
    
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 60,
                    }
                },

                on: {
                    init: function () {
                        const pers = document.querySelectorAll('.peculiarities-section--hidden-elements');
                        pers.forEach((per) => {
                            per.classList.remove('peculiarities-section--hidden-elements');
                        })
                    }
                }
            })
        })
    }

    if(parBody) {
        parBody.addEventListener('mouseenter', (e) => {
            if(e.target.closest('.peculiarities-section__hover-overlay')) {
                hoverOverlay.style.zIndex = '10';
                controls.style.opacity = "1";
                controls.style.pointerEvents = "all";
            }
        }, true)
    
        parBody.addEventListener('mouseleave', (e) => {
            hoverOverlay.style.zIndex = '20';
            controls.style.opacity = "0";
            controls.style.pointerEvents = "none";
        })
    }

    if(navBtnsWrappers.length > 0) {
        navBtnsWrappers.forEach( navBtnsWrapper => {
            const navBtns = navBtnsWrapper.querySelectorAll('.peculiarities-nav__link');

            if(navBtns.length > 0) {
                Array.from(navBtns).forEach((btn) => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
        
                        Array.from(navBtns).forEach((b) => {
                            b.classList.remove('peculiarities-nav__link--active');
                        })
        
                        btn.classList.add('peculiarities-nav__link--active');

                        const peculiaritySwiperList = document.querySelectorAll('.peculiarities-section__swiper');
                        const peculiaritySwiperBlock = document.getElementById(`${btn.dataset.peculiarity}`);

                        if(peculiaritySwiperBlock) {
                            peculiaritySwiperList.forEach((peculiaritySwiperItem) => {
                                peculiaritySwiperItem.classList.add('peculiarities-section__swiper--hidden');
                            })

                            peculiaritySwiperBlock.classList.remove('peculiarities-section__swiper--hidden');
                        }
                    })
                })
            }
        })
    }

    if(IS_MOBILE) {
        const tabs = new Swiper('.js-peculiarities-tabs-swiper', {
            wrapperClass: 'peculiarities-nav',
            slideClass: 'peculiarities-nav__item',
            slidesPerView: 'auto'
        })
    }
}
import { Swiper, Navigation, Pagination, EffectCreative, EffectFade, Controller } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination, EffectCreative, EffectFade, Controller]);

export default function aboutResultsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-about-results-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            speed: 700,
            navigation: {
                nextEl: element.querySelector('.about-results__arrow--prev'),
                prevEl: element.querySelector('.about-results__arrow--next')
            },
            effect: IS_MOBILE ? 'slide' : 'creative',
            slidesPerView: 'auto',
            creativeEffect: {
                prev: {
                    // will set `translateZ(-400px)` on previous slides
                    translate: [0, 0, -400],
                    opacity: 0
                    // scale: 0
                },
                next: {
                    // will set `translateX(100%)` on next slides
                    translate: ['100%', 0, 0],
                    opacity: 1
                },
                limitProgress: 15
            }
        });
    });
}

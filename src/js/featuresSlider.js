import { Swiper, Navigation, Pagination } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, Pagination]);

export default function featuresSlider() {
    const elements = Array.from(document.querySelectorAll('.js-features-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.features__card-slider-arrow--next'),
                prevEl: element.querySelector('.features__card-slider-arrow--prev')
            },
            pagination: {
                el: element.querySelector('.features__card-slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}

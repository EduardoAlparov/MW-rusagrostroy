import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade]);

export default function productSlider() {
    const elements = Array.from(document.querySelectorAll('.js-product-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 500,
            navigation: {
                nextEl: element.querySelector('.product__images-slider-arrow--next'),
                prevEl: element.querySelector('.product__images-slider-arrow--prev')
            },
            pagination: {
                el: element.querySelector('.product__images-slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }
        });
    });
}

import { Swiper, Navigation, EffectFade } from 'swiper';
import { IS_MOBILE } from './utils';

Swiper.use([Navigation, EffectFade]);

export default function projectNewsSlider() {
    if (!IS_MOBILE) return;
    const elements = Array.from(document.querySelectorAll('.js-project-news'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper');

        new Swiper(container, {
            slidesPerView: 'auto'
        });
    });
}

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { convertRemToPixels, IS_MOBILE } from './utils';

gsap.registerPlugin(ScrollTrigger);

export default function animations() {
    // const filtersTl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.filters',
    //         start: () => `top bottom`,
    //         end: 'bottom top',
    //         markers: false
    //     }
    // });

    // filtersTl.from('.filters__form', {
    //     autoAlpha: 0,
    //     y: () => convertRemToPixels(3),
    //     duration: 0.5
    // });
}

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.refresh = () => {
    ScrollTrigger.refresh();
}

export default function catalogSidebar() {
    const elements = Array.from(document.querySelectorAll('.catalog__results-block-sidebar'));

    elements.forEach(element => {
        const house = element.querySelector('.catalog__results-house');
        ScrollTrigger.matchMedia({
            '(min-width: 641px)': function() {
                ScrollTrigger.create({
                    trigger: element,
                    start: 'top top+=30',
                    end: () => 'bottom bottom',
                    pin: house,
                    pinSpacing: false,
                    markers: false
                });
            }
        });
    });
}

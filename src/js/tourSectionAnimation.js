import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const list = document.querySelector('.js-tour-list');
    const wrapper = document.querySelector('.js-tour-wrapper');

    if(!list) return; 
    
    let expandScrollTrigger = ScrollTrigger.create({
        trigger : '.js-expand-animation-trigger',
        start: "bottom top+=100%",
        end: '+=500',
        once: true,
        // markers: true,
        onEnter: () => {
            list.classList.remove('js-expand-animation-trigger');

            setTimeout(() => {
                gsap.fromTo(
                    list,
                    { 
                        xPercent: 0
                    },
                    {
                        xPercent: -131,
                        ease: "power1.in",
                        duration: 2,
                        stagger: 1,
                        scrollTrigger:{
                            trigger: wrapper,
                            start: "bottom top+=95%",
                            end: "bottom center-=0%", 
                            scrub: 1.5,
                        }
                    }
                );
            }, 200);
        }
    });
}
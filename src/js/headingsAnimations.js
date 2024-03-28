import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const animationWrappers = document.querySelectorAll('.js-h-animation-wrapper');
    const gPlan = document.querySelector('.js-gplan-trigger');

    if(animationWrappers.length > 0) {
        Array.from(animationWrappers).forEach( wrapper => {
            gsap.set(wrapper.querySelector('.js-h-animation-heading'), { 
                opacity: 0,
                yPercent: 50,
            });
            
            gsap.set(wrapper.querySelector('.js-h-animation-text'), { 
                opacity: 0,
                yPercent: 50,
            });
    
            gsap.to(
                wrapper.querySelector('.js-h-animation-heading'),
                {
                    opacity: 1,
                    yPercent: 0,
                    ease: "power1.in",
                    duration: 2.2,
                    stagger: 1,
                    scrollTrigger:{
                        trigger: wrapper,
                        start: "top center+=15%",
                        end: "top center+=15%", 
                        once: true,
                        scrub: 1.5,
                    }
                }
            );
    
            gsap.to(
                wrapper.querySelector('.js-h-animation-text'),
                {
                    opacity: 1,
                    yPercent: 0,
                    delay: 1,
                    ease: "power1.in",
                    duration: 4.2,
                    stagger: 0.5,
                    scrollTrigger:{
                        trigger: wrapper,
                        start: "top center+=15%",
                        end: "top center+=15%", 
                        once: true,
                        scrub: 1.5,
                    }
                }
            );
        })
    }

    // if(gPlan) {
    //     gsap.to(
    //         gPlan.querySelector('.general-plan__tooltip'),
    //         {
    //             opacity: 0,
    //             xPercent: -100,
    //             ease: "power1.in",
    //             duration: 2,
    //             stagger: 0.5,
    //             scrollTrigger:{
    //                 trigger: gPlan,
    //                 start: "top center+=15%",
    //                 end: "top center+=15%", 
    //                 once: true,
    //                 scrub: 1.5,
    //             }
    //         }
    //     );
    // }
}
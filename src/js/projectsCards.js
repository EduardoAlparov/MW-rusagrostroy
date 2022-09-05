import gsap from 'gsap';
import { convertRemToPixels, IS_MOBILE } from './utils';

export default function projectsCards() {
    const cards = Array.from(document.querySelectorAll('.projects__card'));
    const toggle = document.querySelector('.catalog__results-toggle');

    cards.forEach(card => {
        if (IS_MOBILE) return;
        const image = card.querySelector('.projects__card-image');
        const details = card.querySelector('.projects__card-details');
        const topRow = card.querySelector('.projects__card-top-row');
        const address = card.querySelector('.projects__card-address ');

        card.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('list-view')) return;
            gsap.to(image, {
                height: () => convertRemToPixels(18),
                duration: 0.5
            });

            gsap.to(details, {
                autoAlpha: 1,
                duration: 0.5,

                y: () => convertRemToPixels(20) * -1
            });
            gsap.to(topRow, {
                duration: 0.5,
                y: () => convertRemToPixels(20) * -1
            });
            gsap.to(address, {
                duration: 0.5,
                y: () => convertRemToPixels(20) * -1
            });
        });

        card.addEventListener('mouseleave', () => {
            if (IS_MOBILE) return;
            if (document.body.classList.contains('list-view')) return;
            gsap.to(image, {
                height: '100%',
                duration: 0.5
            });

            gsap.to(details, {
                autoAlpha: 0,
                duration: 0.5,
                y: 0
            });

            gsap.to(topRow, {
                duration: 0.5,
                y: () => 0
            });
            gsap.to(address, {
                duration: 0.5,
                y: () => 0
            });
        });
    });

    if (cards.length && toggle) {
        toggle.addEventListener('click', event => {
            event.preventDefault();

            cards.forEach(card => {
                const image = card.querySelector('.projects__card-image');
                const details = card.querySelector('.projects__card-details');
                const topRow = card.querySelector('.projects__card-top-row');
                const address = card.querySelector('.projects__card-address ');


                gsap.killTweensOf(image);
                gsap.set(image, {
                    clearProps: 'all'
                });

                gsap.killTweensOf(details);
                gsap.set(details, {
                    clearProps: 'all'
                });

                gsap.killTweensOf(topRow);
                gsap.set(topRow, {
                    clearProps: 'all'
                });

                gsap.killTweensOf(address);
                gsap.set(address, {
                    clearProps: 'all'
                });
            });
        });
    }
}

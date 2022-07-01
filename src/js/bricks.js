import { primaryInput } from 'detect-it';

export default function bricks() {
    if (primaryInput === 'touch') return;

    
    const elements = Array.from(document.querySelectorAll('.bricks'));

    elements.forEach(element => {
        const cursor = element.querySelector('.bricks__cursor');

        element.parentElement.addEventListener('mousemove', event => {
            console.log(event);

            element.parentElement.style.setProperty('--x', event.clientX - element.getBoundingClientRect().left + 'px');
            element.parentElement.style.setProperty('--y', event.clientY - element.getBoundingClientRect().top + 'px');
        });

        element.parentElement.addEventListener('mouseenter', () => {
            cursor.classList.add('visible');
        });
        element.parentElement.addEventListener('mouseleave', () => {
            cursor.classList.remove('visible');
        });
    });
}

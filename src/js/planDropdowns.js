export default function planDropdowns() {
    const numbers = Array.from(document.querySelectorAll('.project-about__plan-item-number'));

    numbers.forEach(number => {
        number.addEventListener('click', event => {
            event.preventDefault();
            number.closest('.project-about__plan-item').classList.add('active');

            console.log('Adding class');
        });
    });

    const closeBtns = Array.from(document.querySelectorAll('.project-about__plan-item-dropdown-close'));

    closeBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            btn.closest('.project-about__plan-item').classList.remove('active');

            console.log('REmoving class');
        });
    });
}

export default function printBtn() {
    const elements = Array.from(document.querySelectorAll('.js-print'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            window.print()
        })
    })
}
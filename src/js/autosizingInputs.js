export default function autosizingInputs() {
    const elements = Array.from(document.querySelectorAll('.js-autosizing-input'));

    elements.forEach(element => {
        const input = element.querySelector('textarea, input');
        input.addEventListener('input', () => {
            element.dataset.replicatedValue = input.value;
          
        });
    });

    window.updateAutosizingInputs = () => {
        elements.forEach(element => {
            const input = element.querySelector('textarea, input');

            element.dataset.replicatedValue = input.value;
        });
    };

    window.updateAutosizingInputs();
}

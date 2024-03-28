export default () => {
    const swtcherInput = document.querySelector('input[type="checkbox"][name="general-plan-input"]');

    if(!swtcherInput) return;

    swtcherInput.addEventListener('input', (e) => {
        e.target.closest('.general-plan__body').classList.toggle('general-plan__body--hidden');
        e.target.closest('.general-plan__body').querySelector('.general-plan__tooltip').classList.add('general-plan__tooltip--hidden');
    })
}
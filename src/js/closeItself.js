export default () => {
    const itself = document.querySelectorAll('._close-itself');

    for (let index = 0; index < itself.length; index++) {
        const element = itself[index];
        
        element.addEventListener('click', (e) => {
            if(e.target.closest('._close-itself-btn')) {
                element.style.display = 'none';
            }
        })
    }
}
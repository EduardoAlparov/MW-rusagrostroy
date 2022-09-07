export default function sharing() {
    const elements = Array.from(document.querySelectorAll('.js-share'));

    elements.forEach(element => {
        if (!navigator.canShare) {
            element.remove();
            return;
        }
        element.addEventListener('click', async (event) => {
            event.preventDefault();
            const shareData = {
                url: element.href
            };
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.error(err);
            }
        });
    });
}

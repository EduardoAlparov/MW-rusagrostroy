export default function projectMap() {
    const elements = Array.from(document.querySelectorAll('.js-project-map'));

    elements.forEach(element => {
        ymaps.ready(initProjectMap);

        function initProjectMap() {
            const pin = {
                iconLayout: 'default#image',
                iconImageHref: 'img/pin.svg',
                iconImageSize: window.matchMedia('(max-width: 640px)').matches ? [60, 60] : [72, 72],
                iconImageOffset: window.matchMedia('(max-width: 640px)').matches ? [-30, -30] : [-36, -36]
            };

            const zoom = element.hasAttribute('data-zoom') ? element.getAttribute('data-zoom') : 14;

            const coords = element.hasAttribute('data-coords') ? element.getAttribute('data-coords') : null;

            if (!coords) return;

            const mapInstance = new ymaps.Map(element, {
                center: coords.split(','),
                zoom: zoom,
                controls: []
            });

            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 15,
                        top: 15
                    }
                }
            });
            mapInstance.controls.add(zoomControl);

            mapInstance.behaviors.disable('scrollZoom');

            const objectManager = new ymaps.ObjectManager({
                clusterize: false,
                clusterHasBalloon: false,
                geoObjectOpenBalloonOnClick: false
            });
            mapInstance.geoObjects.add(objectManager);

            const objectToAdd = {
                id: coords,
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coords.split(',')
                },
                options: {
                    ...pin
                }
            };
            objectManager.add(objectToAdd);
        }
    });
}

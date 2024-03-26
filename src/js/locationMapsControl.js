export default () => {
    const elements = Array.from(document.querySelectorAll('.js-location-map'));

    if(elements.length < 1) return;
    
    elements.forEach(element => {
        ymaps.ready(initContactsMap);

        function initContactsMap() {
            const zoom = window.locationZoom ?? 15,
                center = window.locationCenter,
                mainCoords = window.mainCoords;

            const mapInstance = new ymaps.Map(element, {
                center: center,
                zoom: zoom,
                controls: []
            });

            const MainMarkerLayout = ymaps.templateLayoutFactory.createClass([
                '<div class="ya-main-placemark">',
                    '<span></span>',
                '</div>'
            ].join(''));

            const getPointData = function (index) {
                return {
                    balloonContentHeader: '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
                    balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
                    balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
                    clusterCaption: 'метка <strong>' + index + '</strong>'
                }
            };

            const getPointOptions = function () {
                return {
                    iconLayout: MainMarkerLayout,
                };
            };

            let mainPLacemark = new ymaps.Placemark(mainCoords, getPointData(1), getPointOptions());
            mapInstance.geoObjects.add(mainPLacemark);

            mapInstance.behaviors.disable('scrollZoom');
        }
    })
}
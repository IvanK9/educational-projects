// nav Icon

const navButton = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top');

navButton.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top--mobile');
    document.body.classList.toggle('no-scroll');
}

// Mask phone

mask('[data-tel-input]');

// Удаляем "+", если ничего не введено

const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })

    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
})

// Maps

ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    // // Создание геообъекта с типом точка (метка).
    // var myPlacemark = new ymaps.GeoObject({
    //     geometry: {
    //         type: "Point", // тип геометрии - точка
    //         coordinates: [59.943543, 30.338928], // координаты точки
    //         preset: 'islands#redIcon'
    //     },
    // });

    // // var myPlacemark = new ymaps.Placemark([55.8, 37.6], {}, {
    // //     preset: 'islands#redIcon'
    // // });

    // // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myPlacemark);

    var myPlacemark = new ymaps.Placemark([59.943543, 30.338928],
        {
            balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
        },
        {
            iconLayout: 'default#image',
            iconImageHref: './img/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
        });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип

    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}
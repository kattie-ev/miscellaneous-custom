// Селект

const element = document.querySelector('.js-select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
});

// Карта

ymaps.ready(init);
function init() {

    var myMap = new ymaps.Map("map", {
        center: [48.872185073737896, 2.354223999999991],
        zoom: 15
    });

    var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Subtract.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-13, -40]
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('inputSearch');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('rulerControl');
}

// Форма

document.addEventListener("DOMContentLoaded", function () {
    const validation = new JustValidate('.form');
    const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    validation
        .addField('.name', [{
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
        }
        ])
        .addField('.mail', [{
            rule: 'required',
            errorMessage: 'Вы не ввели e-mail',
        },
        {
            rule: 'email',
            errorMessage: 'Вы некорректно ввели e-mail',
        }
        ])
        .addField('.tel', [{
            rule: "function",
            validator: function (name, value) {
                const phone = selector.inputmask.unmaskedvalue();
                return phone.length === 10
            },
            errorMessage: 'Вы не ввели телефон',
        }]);
})

// Тултип

tippy('.tooltip-marker', {
    content: 'Глава 2, страница 176',
    maxWidth: 163,
    placement: 'top',
     });
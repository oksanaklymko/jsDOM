//Створити HTML-сторінку зі світлофором і кнопкою,
//яка перемикає світлофор на наступний колір.

const btnLight = document.querySelector('.js-btn');
const trafficLightNode = document.querySelector('.js-traffic-light');

initLight(trafficLightNode);

btnLight.addEventListener('click', function () {
        switchLight();
    });

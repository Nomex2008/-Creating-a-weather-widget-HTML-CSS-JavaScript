"use strict"

//c8c900c0763fb7da7adb907585640492
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//block
const weatherBlock = document.querySelector('#weather')
//console.log(weatherBlock)

async function loadWeather(e) {
    weatherBlock.innerHTML =`
        <div class="weather__loading">
            <img src="img/loading.gif" alt="loading">
        </div>`;
}

if(weatherBlock) {
    //console.log(11)

    loadWeather()
}
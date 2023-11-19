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

    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Rivne&appid=c8c900c0763fb7da7adb907585640492'
    //console.log(server)

    const response = await fetch(server, {
        method:'GET',
    });
    //console.log(response)

    const responseResult = await response.json();
    //console.log(responseResult)

    if (response.ok) {
        getWeather(responseResult)
    } else {
        weatherBlock.innerHTML = responseResult.massage;
    }
}

function getWeather(data) {
    //console.log(data)

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feels_like = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon= data.weather[0].icon;
    //console.log([location,temp,feels_like,weatherStatus,weatherIcon])

    const templayt = `
        <div class="weather__header">

            <div class="weather__main">
                <div class="weather__city">${location}</div>
                <div class="weather__status">${weatherStatus}</div>
            </div>

            <div class="weather__icon">
                <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Clouds">
            </div>

        </div>

        <div class="weather__temp">${temp}</div>

        <div class="weather__feels-like">Feels like: ${feels_like}</div>`
    //console.log(templayt)

    weatherBlock.innerHTML = templayt;
}

if(weatherBlock) {
    //console.log(11)

    loadWeather()
}
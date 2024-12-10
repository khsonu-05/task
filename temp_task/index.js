const container = document.querySelector('.container');
const search = document.querySelector('.search-btn');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

search.addEventListener('click', () => {
    const APIKey = 'eaaeebb9f1362ef188b04587d6cd133d';
    const city = document.querySelector('#input').value;
    if (city == '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {

        console.log(json);
        if (json.cod == '404') {
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
        }
        console.log(json.cod);
        container.style.height = '550px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');
        console.log("----------------------");
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1146/1146856.png';
                break;

            case 'Rain':
                image.src = 'https://img.freepik.com/premium-psd/sunny-rainy-day-weather-forecast-icon-meteorological-sign-3d-render_471402-496.jpg?w=740';
                break;

            case 'Snow':
                image.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fsnow_6635320&psig=AOvVaw0vKojJYM2Tgq8iqBfCMEaD&ust=1733607465843000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPihxriNlIoDFQAAAAAdAAAAABAE';
                break;

            case 'Clouds':
                image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vxBN4BjuJ-Yjk-vaDpivaUQ65HFe3bLPQA&s';
                break;

            case 'Mist':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1197/1197102.png';
                break;

            case 'Haze':
                image.src = 'https://cdn-icons-png.flaticon.com/512/9755/9755345.png';
                break;


            default:
                image.src = 'https://cdn-icons-png.flaticon.com/512/1146/1146856.png';

        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        
        description.innerHTML = `${json.weather[0].description}`;
        

        humidity.innerHTML = `${json?.main?.humidity}%`;
        
        wind.innerHTML = `${parseInt(json?.wind?.speed)}Km/h`;
        

    }).catch(err=>{
        container.style.height = '400px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error404.classList.add('active');
    })


})

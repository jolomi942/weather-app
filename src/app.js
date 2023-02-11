let now = new Date();

let dateToday = document.querySelector("#time-1");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
day = days[now.getDay()];
dateToday.innerHTML = `${day}, ${hours}:${minutes} `;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let description = document.querySelector("#location-1");

  if (searchInput.value) {
    description.innerHTML = `🌏 ${searchInput.value}`;
  } else {
    description.innerHTML = null;
    alert("Please type a city");
  }
  function showTemperature(response) {
    let weatherTemp = document.querySelector("#temperature-1");
    weather = Math.round(response.data.main.temp);
    fahrenheit = Math.round((weather * 9) / 5 + 32);
    weatherTemp.innerHTML = `Temp:${weather}℃/${fahrenheit}℉`;

    let weatherHumidity = document.querySelector("#humidity-1");
    humidity = Math.round(response.data.main.humidity);
    weatherHumidity.innerHTML = `Humidity:${humidity}%`;

    let weatherWind = document.querySelector("#windSpeed-1");
    wind = Math.round(response.data.wind.speed);
    weatherWind.innerHTML = `Wind Speed:${wind}º`;

    let descriptionTemp = document.querySelector("#description-1");
    description = response.data.weather[0].description;
    descriptionTemp.innerHTML = `${description}`;

    let weatherTimeZone = document.querySelector(".geoLocation");
    longitude = response.data.coord.lon;
    latitude = response.data.coord.lat;
    weatherTimeZone.innerHTML = `long:${longitude} lat: ${latitude}`;
  }
  let city = searchInput.value;
  let apiKey = "9546ab36ab423e2c11a7498443672f82";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let location = document.querySelector("playLocation");
  location.innerHTML = `latitude is ${position.coords.latitude}and your longitude is ${position.coords.longitude}`;
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#button");
button.addEventListener("click", getCurrentPosition);


function showTemp(response){
        let temp = document.querySelector("#temperature-2");
        weather2 = Math.round(response.data.main.temp);
        fahrenheitTemp = Math.round((weather2 * 9) / 5 + 32);
        temp.innerHTML = `Temp:${weather2}℃/${fahrenheitTemp}℉`;
    
        let weatherHum = document.querySelector("#humidity-2");
        humidity2 = Math.round(response.data.main.humidity);
        weatherHum.innerHTML = `Humidity:${humidity2}%`;

        let weaWind = document.querySelector("#windSpeed-2");
        windy = Math.round(response.data.wind.speed);
        weaWind.innerHTML = `Wind Speed:${windy}º`;

        let descTemp = document.querySelector("#description-2");
        description2 = response.data.weather[0].description;
        descTemp.innerHTML = `${description2}`;
}

let apKey = "9546ab36ab423e2c11a7498443672f82";
let apUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Tokyo}&appid=${apKey}&units=metric`;

axios.get(`${apUrl}`).then(showTemp);


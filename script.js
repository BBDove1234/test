const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe%2FLondon&forecast_days=1";

const apiKey2 = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe%2F";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon");

async function checkWeather(city){
  const response = await fetch(apiKey2 +city);
  var data = await response.json();
  
  console.log(data);
  
  document.querySelector(".city").innerHTML = data.timezone;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temperature_2m) + "°c";
  document.querySelector(".humidity").innerHTML = data.current.relative_humidity_2m + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_speed_10m + " km/h";
  
  if(data.weather_code == 0) {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather_code == 1 || data.weather_code == 2) {
    weatherIcon.src = "images/clouds.png";
  }

}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
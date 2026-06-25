const apiKey = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  let response = "";
  
  // City Finding
  if (city == "London" || city == "Moscow" || city == "Berlin") {
    response = await fetch(apiKey + "Europe%2F" +city);
    }
  else if (city == "Singapore" || city == "Tokyo" || city == "Bangkok") {
    response = await fetch(apiKey + "Asia%2F" +city);
  }
  else if (city == "Chicago" || city == "New York" || city == "Sao Paulo" || city == "Denver" || city == "Los Angeles" || city == "Anchorage") {
    response = await fetch(apiKey + "America%2F" +city);
  }
  else if (city == "Cairo") {
    response = await fetch(apiKey + "Africa%2F" +city);
  }
  else if (city == "Sydney") {
    response = await fetch(apiKey + "Australia%2F" +city);
  }
  else {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  
  var data = await response.json();
    
  document.querySelector(".city").innerHTML = data.timezone;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temperature_2m) + "°c";
  document.querySelector(".humidity").innerHTML = data.current.relative_humidity_2m + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_speed_10m + " km/h";
    
  // Weather code
  if(data.weather_code == 0) {
    weatherIcon.src = "images/clear.png";
  }
  else if (data.weather_code == 1 || data.weather_code == 2 || data.weather_code == 3) {
    weatherIcon.src = "images/clouds.png";
  }
  else if (data.weather_code == 51 || data.weather_code == 53 || data.weather_code == 55) {
    weatherIcon.src = "images/drizzle.png";
  }
  else if (data.weather_code == 61 || data.weather_code == 63 || data.weather_code == 65 || data.weather_code == 80 || data.weather_code == 81 || data.weather_code == 82) {
    weatherIcon.src = "images/rain.png;"
  }
    
  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none";

}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
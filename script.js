apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Europe%2FLondon&forecast_days=1";

async function checkWeather(){
  const response = await fetch(apiUrl);
  var data = await response.json();
  
  console.log(data);
  
  document.querySelector(".city").innerHTML = data.timezone;
  document.querySelector(".temp").innerHTML = Math.round(data.current.temperature_2m) + "°c";
  document.querySelector(".humidity").innerHTML = data.current.relative_humidity_2m + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_speed_10m + " km/h";
}

checkWeather();
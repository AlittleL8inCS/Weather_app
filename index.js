function urlConstructor(forCity) {
  const baseUlr = `https://api.openweathermap.org/data/2.5/weather?q=`;
  let city = forCity;
  let units = `metric`;
  const apiKey = /*Your Key here*/;
  return `${baseUlr}${city}&appid=${apiKey}&units=${units}`;
}

async function weather(city) {
  const response = await fetch(urlConstructor(city));
  let data = await response.json();
  //console.dir(data);
  return data;
}

console.log("hi");

let input1 = document.getElementById("input1");
let searchButton = document.getElementById("search");

input1.addEventListener("keypress", async function (e) {
  if (e.key === "Enter") {
    city = input1.value;

    try {
      let weatherData = await weather(city);

      cityName = document.getElementById("cityLabel");
      temp = document.getElementById("tempLabel");
      humidity = document.getElementById("humidityLabel");
      wind = document.getElementById("windLabel");

      cityName.textContent = weatherData.name;
      temp.textContent = weatherData.main.temp + "°C";
      humidity.textContent = weatherData.main.humidity + "% ";
      wind.textContent = weatherData.wind.speed + " km/h ";
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }
});

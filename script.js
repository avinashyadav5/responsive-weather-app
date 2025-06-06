const apiKey = "YOUR_NEW_OPENWEATHERMAP_API_KEY_HERE"; // Remember to get one from OpenWeatherMap
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=NEW DELHI";
const searchbox = document.querySelector(".searchbox input");
const searchbtn = document.querySelector(".searchbtn button");
const weatherIcon = document.querySelector(".weather-img img");
const weatherText = document.querySelector(".weather-img p");

async function checkWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
        const data = await response.json();

        document.querySelector(".weather").classList.add("loaded");
        //document.querySelector(".weather").style.display = "block";

        // Handle invalid city
        if (data.cod === "404") {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".time").innerHTML = data.timezone;
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/Hr";
        document.querySelector(".visibility").innerHTML = data.visibility + " m";
        document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
        document.querySelector(".cloud").innerHTML = data.clouds.all + " %";

        const weatherIcon = document.querySelector(".weather-img img");
        const weatherText = document.querySelector(".weather-img p");

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
            weatherText.innerText = data.weather[0].description;
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
            weatherText.innerText = data.weather[0].description;
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
            weatherText.innerText = data.weather[0].description;
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            weatherText.innerText = data.weather[0].description;
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
            weatherText.innerText = data.weather[0].description;
        }

        const timezoneOffset = data.timezone; // in seconds
        const localDate = new Date(new Date().getTime() + timezoneOffset * 1000);

        // Format time to HH:MM AM/PM
        const hours = localDate.getUTCHours();
        const minutes = localDate.getUTCMinutes();
        const formattedTime = `${(hours % 12) || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;

        // Display the time
        document.querySelector(".time").innerHTML = "Local Time: " + formattedTime;

    } catch (error) {
        alert("Something went wrong while fetching weather data.");
        console.error(error);
    }
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});


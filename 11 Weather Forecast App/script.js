const apiKey = "YOUR_API_KEY";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        const weatherEmoji = getWeatherEmoji(data.weather[0].main);

        document.getElementById("weatherResult").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <div style="font-size:50px;">${weatherEmoji}</div>
            🌡 Temperature: ${data.main.temp}°C <br>
            💧 Humidity: ${data.main.humidity}% <br>
            🌬 Wind Speed: ${data.wind.speed} m/s <br>
            ☁ Condition: ${data.weather[0].description}
        `;

    } catch (error) {
        alert("Error fetching weather data!");
    }
}

function getWeatherEmoji(condition) {
    switch (condition) {
        case "Clear":
            return "☀️";
        case "Clouds":
            return "☁️";
        case "Rain":
            return "🌧";
        case "Thunderstorm":
            return "⛈";
        case "Snow":
            return "❄️";
        default:
            return "🌈";
    }
}

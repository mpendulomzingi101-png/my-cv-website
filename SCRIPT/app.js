// Detect user location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Show coordinates first
    console.log(latitude, longitude);

    // Weather API
    const apiKey = "585cd0ea68a2bef7f8dfd04cf98ab270";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const city = data.name;
            const country = data.sys.country;
            const temp = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById("location").innerHTML =
                `Location: ${city}, ${country}`;

            document.getElementById("weather").innerHTML =
                `Weather: ${temp}°C | ${description}`;
        });
}

function error() {
    alert("Location access denied.");
}
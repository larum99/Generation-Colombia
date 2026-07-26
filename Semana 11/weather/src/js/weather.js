const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const resultCard = document.getElementById('result');
const cityNameEl = document.getElementById('city-name');
const temperatureEl = document.getElementById('temperature');
const windSpeedEl = document.getElementById('wind-speed');
const windDirectionEl = document.getElementById('wind-direction');
const messageEl = document.getElementById('message');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (!city) {
        showMessage('Por favor ingresa una ciudad.', true);
        return;
    }

    showMessage('Buscando clima...', false);
    resultCard.hidden = true;

    try {
        const coordinates = await getCoordinates(city);
        const weather = await getWeather(coordinates.latitude, coordinates.longitude);

        cityNameEl.textContent = city;
        temperatureEl.textContent = weather.temperature.toFixed(1);
        windSpeedEl.textContent = weather.windSpeed.toFixed(1);
        windDirectionEl.textContent = weather.windDirection.toFixed(0);
        resultCard.hidden = false;
        showMessage('', false);
    } catch (error) {
        showMessage(error.message, true);
    }
});

async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('No se pudo obtener la ubicación.');
    }

    const data = await response.json();
    if (!data.results || data.results.length === 0) {
        throw new Error('Ciudad no encontrada.');
    }

    return {
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
    };
}

async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Error al obtener los datos meteorológicos.');
    }

    const data = await response.json();
    if (!data.current_weather) {
        throw new Error('No hay datos de clima disponibles.');
    }

    return {
        temperature: data.current_weather.temperature,
        windSpeed: data.current_weather.windspeed,
        windDirection: data.current_weather.winddirection,
    };
}

function showMessage(text, isError) {
    messageEl.textContent = text;
    messageEl.className = isError ? 'error' : '';
}

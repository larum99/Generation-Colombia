const form = typeof document !== 'undefined' ? document.getElementById('weather-form') : null;
const cityInput = typeof document !== 'undefined' ? document.getElementById('city') : null;
const resultCard = typeof document !== 'undefined' ? document.getElementById('result') : null;
const cityNameEl = typeof document !== 'undefined' ? document.getElementById('city-name') : null;
const temperatureEl = typeof document !== 'undefined' ? document.getElementById('temperature') : null;
const windSpeedEl = typeof document !== 'undefined' ? document.getElementById('wind-speed') : null;
const windDirectionEl = typeof document !== 'undefined' ? document.getElementById('wind-direction') : null;
const messageEl = typeof document !== 'undefined' ? document.getElementById('message') : null;

if (form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const city = cityInput.value.trim();

        if (!city) {
            resultCard.hidden = true;
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
            resultCard.hidden = true;
            showMessage(error.message, true);
        }
    });
}

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        const statusText = response.statusText ? ` ${response.statusText}` : '';
        throw new Error(`HTTP ${response.status}${statusText}`);
    }

    return response.json();
}

async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=es&format=json`;

    let data;
    try {
        data = await fetchJson(url);
    } catch (error) {
        if (error.message.startsWith('HTTP')) {
            throw new Error('No se pudo obtener la ubicación.');
        }
        throw error;
    }

    if (!data.results || data.results.length === 0) {
        throw new Error('Ciudad no encontrada.');
    }

    return {
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
    };
}

/**
 * Obtiene el clima actual para unas coordenadas geográficas.
 *
 * @param {number} latitude - Latitud de la ubicación.
 * @param {number} longitude - Longitud de la ubicación.
 * @returns {Promise<{temperature: number, windSpeed: number, windDirection: number}>}
 *   Un objeto con los valores de clima actual:
 *     - temperature: temperatura en grados Celsius
 *     - windSpeed: velocidad del viento en km/h
 *     - windDirection: dirección del viento en grados
 *
 * @throws {Error} Si la API responde con un error HTTP, no devuelve datos
 *   de clima, o la respuesta está incompleta.
 *
 * @example
 * const weather = await getWeather(4.711, -74.0721);
 * console.log(`Temperatura: ${weather.temperature}°C`);
 * console.log(`Viento: ${weather.windSpeed} km/h`);
 * console.log(`Dirección del viento: ${weather.windDirection}°`);
 */
async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh`;

    let data;
    try {
        data = await fetchJson(url);
    } catch (error) {
        if (error.message.startsWith('HTTP')) {
            throw new Error('Error al obtener los datos meteorológicos.');
        }
        throw error;
    }

    const currentWeather = data.current_weather;
    if (!currentWeather) {
        throw new Error('No hay datos de clima disponibles.');
    }

    const { temperature, windspeed: windSpeed, winddirection: windDirection } = currentWeather;
    if (temperature == null || windSpeed == null || windDirection == null) {
        throw new Error('Faltan datos meteorológicos obligatorios en la respuesta.');
    }

    return {
        temperature,
        windSpeed,
        windDirection,
    };
}

function showMessage(text, isError = false) {
    if (!messageEl) return;

    if (!text) {
        messageEl.textContent = '';
        messageEl.className = '';
        messageEl.hidden = true;
        return;
    }

    messageEl.textContent = text;
    messageEl.className = isError ? 'error' : 'info';
    messageEl.hidden = false;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getCoordinates,
        getWeather,
    };
}

const { getCoordinates, getWeather } = require('./weather');

describe('weather.js', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
        delete global.fetch;
    });

    describe('getCoordinates', () => {
        it('devuelve latitud y longitud para una ciudad válida', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    results: [{ latitude: 4.711, longitude: -74.0721 }],
                }),
            });

            const coords = await getCoordinates('Bogotá');

            expect(coords).toEqual({ latitude: 4.711, longitude: -74.0721 });
            expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://geocoding-api.open-meteo.com/v1/search'));
        });

        it('lanza error cuando la ciudad no existe', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ results: [] }),
            });

            await expect(getCoordinates('CiudadNoValida')).rejects.toThrow('Ciudad no encontrada.');
        });

        it('lanza error cuando la respuesta HTTP no es OK', async () => {
            global.fetch.mockResolvedValueOnce({ ok: false });

            await expect(getCoordinates('Bogotá')).rejects.toThrow('No se pudo obtener la ubicación.');
        });

        it('lanza error si fetch falla por red', async () => {
            global.fetch.mockRejectedValueOnce(new Error('network failure'));

            await expect(getCoordinates('Bogotá')).rejects.toThrow('network failure');
        });
    });

    describe('getWeather', () => {
        it('devuelve datos de clima para coordenadas válidas', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({
                    current_weather: {
                        temperature: 22.3,
                        windspeed: 15.8,
                        winddirection: 185,
                    },
                }),
            });

            const weather = await getWeather(4.711, -74.0721);

            expect(weather).toEqual({
                temperature: 22.3,
                windSpeed: 15.8,
                windDirection: 185,
            });
            expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('https://api.open-meteo.com/v1/forecast'));
        });

        it('lanza error cuando no hay datos de clima', async () => {
            global.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => ({ current_weather: null }),
            });

            await expect(getWeather(4.711, -74.0721)).rejects.toThrow('No hay datos de clima disponibles.');
        });

        it('lanza error cuando la respuesta HTTP no es OK', async () => {
            global.fetch.mockResolvedValueOnce({ ok: false });

            await expect(getWeather(4.711, -74.0721)).rejects.toThrow('Error al obtener los datos meteorológicos.');
        });

        it('lanza error si fetch falla por red', async () => {
            global.fetch.mockRejectedValueOnce(new Error('network failure'));

            await expect(getWeather(4.711, -74.0721)).rejects.toThrow('network failure');
        });
    });
});

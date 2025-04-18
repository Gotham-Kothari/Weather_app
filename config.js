const { contextBridge } = require('electron');
const config = {
    OPENWEATHER_API_KEY: //Add your own API key here,
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    DEFAULT_CITY: 'New York',
    UNITS: 'metric',
    LANGUAGE: 'en'
};

contextBridge.exposeInMainWorld("api", {
    getConfig: () => config
});

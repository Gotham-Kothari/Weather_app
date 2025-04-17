const { contextBridge } = require('electron');
const config = {
    OPENWEATHER_API_KEY: '76039c6bc2064d2285fbf682467ce9d0',
    BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
    DEFAULT_CITY: 'New York',
    UNITS: 'metric',
    LANGUAGE: 'en'
};

contextBridge.exposeInMainWorld("api", {
    getConfig: () => config
});
# 🌦️ Weather App (Electron.js)

This is a desktop Weather App built using **Electron.js**, HTML, CSS, and JavaScript. It fetches real-time weather data from the **OpenWeatherMap API** and displays it in a clean, interactive UI.

---

## 📦 Features

- Search weather by city name
- Displays:
  - Temperature (°C)
  - Humidity (%)
  - Wind Speed (km/h)
  - Cloud Coverage (%)
  - Live Weather Icon
- Responsive and clean UI using custom styling
- Built on a secure Electron architecture using a preload script and context isolation

---

## ⚙️ Technologies Used

- **Electron.js** (with preload script)
- HTML5 / CSS3
- Vanilla JavaScript
- OpenWeatherMap API

---

## 🚀 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/weather-app
   cd weather-app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the app**  
   ```bash
   npx electron .
   ```

---
**The App:**
![Uploading image.png…]()

---
## 🔐 API Setup

This app uses the **OpenWeatherMap API**. To make it work:

1. Sign up at [https://openweathermap.org](https://openweathermap.org)
2. Get your free API key
3. Replace the API key inside `config.js`:

```js
const config = {
  OPENWEATHER_API_KEY: 'YOUR_API_KEY_HERE',
  ...
};
```

---

## 📁 Project Structure

```
.
├── main.js             # Electron main process
├── config.js           # Preload script with API config
├── renderer.js         # Frontend logic and DOM updates
├── index.html          # UI layout
├── style.css           # Stylesheet
└── icons/              # Weather icons (optional)
```

---

## 📝 License

MIT License. Use freely and contribute back!

---

## ✨ Credits

Weather data powered by [OpenWeatherMap](https://openweathermap.org/)

window.addEventListener("DOMContentLoaded", () => {
    const config = window.api.getConfig();

    const inputBar = document.getElementById("input-bar");
    const searchBtn = document.getElementById("search-btn");

    const cityName = document.getElementById("city-name");
    const timezone = document.getElementById("time-zone");
    const temperature = document.getElementById("temperature");
    const tempIcon = document.querySelector(".temp-icon img"); //temperature icon

    const level = document.getElementById("level"); //Feels Like text
    const value = document.getElementById("value"); //wind-speed
    const chances = document.getElementById("chances"); //rain
    const hmdValue = document.getElementById("hmd-value"); //humidity

    function search() {
        const city = inputBar.value.trim();

        if(!city) {
            alert("Please enter a valid city!");
            return;
        }

        const url = `${config.BASE_URL}?q=${city}&appid=${config.OPENWEATHER_API_KEY}&units=${config.UNITS}&lang=${config.LANGUAGE}`;

        console.log("Constructed URL: ", url);

        inputBar.value = "";
    

    fetch(url)
        .then(res=> {
            if(!res.ok) {
                throw new error(`City not found or API error (${res.status})`);
            }
            return res.json();
        })

        .then(data => {
            cityName.innerText = data.name;
            temperature.innerText = Math.round(data.main.temp);
            hmdValue.innerText = `${data.main.humidity}`;
            value.innerText = data.wind.speed;
            chances.innerText = data.clouds.all;
            level.innerText = data.main.feels_like;

            const iconCode = data.weather[0].icon;
            tempIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        })

        .catch(err => {
            alert("Could not fetch city data. Please check the city's name.")
        });
    }

    searchBtn.addEventListener("click", search);

    inputBar.addEventListener("keydown", function(event) {
        if(event.key == "Enter") {
            search();
        }
    });
});


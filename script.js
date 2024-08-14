//api - 

const apiKey = "4a322967dff64ff5a372aa9d2c8429ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const weatherIcon = document.querySelector(".weather-icon"); 


async function checkWeather(){
    const city = document.getElementById("input-box").value;
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    const data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }

    else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}
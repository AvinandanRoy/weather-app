const apikey ="a45b6f546285b7d213840a44cb3b4444";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl+`&q=${city}` +`&appid=${apikey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h" ;

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "./Images/clouds.png"
    }
    if(data.weather[0].main == "Clear"){
        weathericon.src = "./Images/clear.png"
    }
    if(data.weather[0].main == "Rain"){
        weathericon.src = "./Images/rain.png"
    }
    if(data.weather[0].main == "Drizzle"){
        weathericon.src = "./Images/drizzle.png"
    }
    if(data.weather[0].main == "Mist"){
        weathericon.src = "./Images/mist.png"
    }
    
}



searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})











// const apikey = "a45b6f546285b7d213840a44cb3b4444";
// const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkweather(city){
//     const response = await fetch(apiurl+city+`&appid=${apikey}`);

//     const data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+` °C`;
//     document.querySelector(".humidity").innerHTML = data.main.humidity +` %`;
//     document.querySelector(".wind").innerHTML = data.wind.speed+` km/h`;
// }

// searchBtn.addEventListener("click",()=>{
//     checkweather(searchBox.value);
// })

// checkweather()










// const apiKey = "a45b6f546285b7d213840a44cb3b4444";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input")
// const searchBtn = document.querySelector(".search button")

// async function checkWeather(city){
//     const response = await fetch(apiUrl+city+`&appid=${apiKey}`);

//     const data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;   
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +` °C`;   
//     document.querySelector(".humidity").innerHTML = data.main.humidity+` %`;   
//     document.querySelector(".wind").innerHTML = data.wind.speed+` Km/h`;   
// }

// searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
// })
// checkWeather();
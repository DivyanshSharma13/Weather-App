BASE_URL = "https://api.weatherapi.com/v1/current.json?key=7e2554d02fda40f083d92257252202"


let input = document.querySelector("input");
let cityelement = document.querySelector(".c");
let temp = document.querySelector(".temp");
let temperature = document.querySelector(".temperature");
let date = document.querySelector(".d");
let btn = document.querySelector(".btn")
let img = document.querySelector(".weatherlogo")



btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    try{
    const city = input.value;
    if(!city){
        alert("Please enter a city name!")
        return;
    }
    const formattedCity = `${city[0].toUpperCase()}${city.substring(1).toLowerCase()}`;
    const URL = `${BASE_URL}&q=${formattedCity}`
    let response = await fetch(URL)
    let data = await response.json();
    const temp_C = data.current.temp_c
    const logo = data.current.condition.icon
    const time = data.location.localtime;
    const country = data.location.country;
    const region = data.location.region;
    const c = data.location.name;
    cityelement.innerText = `${formattedCity} , ${region}, ${country}` ;
    temperature.innerText = `${temp_C}°C` ;
    console.log(data);
    img.src=`${logo}`;
    date.innerText = `${time}`;
    } catch(e){
        alert("Failed to fetch weather data. Please check the city name and try again.");
    }
})

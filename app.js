let input = document.querySelector('#location');
let search = document.querySelector('.s-i');
let degre = document.querySelector('.img-dec');
let WeatherUpdate = document.querySelector('.w-update');
let PS = document.querySelector('.ps');
let WindSpeed = document.querySelector('.speed');
let CityName = document.querySelector('.cn')

let url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=1a164155fa71f40b15141e269f6aadff";

async function ck(){

    const response = await fetch(url);
        var data =await response.json();
        console.log(data);

        let name=input.value;


        let deg=Math.floor(data.main.temp);
        let humidity=data.main.humidity;
        let wp=data.wind.speed;
        let wu=data.weather.description

        degre.innerText=`${deg}°C`;
        PS.innerText=`${humidity}%`;
        WindSpeed.innerText=`${wp} Km/H`;
        WeatherUpdate.innerText=wu;
        CityName.innerText=name;

        name=input.value='';
}
search.addEventListener('click',async()=>{   
    name=input.value.trim();
    if(name === ""){
        alert("Please insert the city name first");
    }
    ck();
});


// 
// ffdskfdfvvjkdf











// let apiKey = "1a164155fa71f40b15141e269f6aadff";
// let apiurl= "https://api.openweathermap.org/data/2.5/weather?q=London&appid=";

// async function checkWeather() {
//     const response = await fetch(apiurl + `&appid=${apiKey}`);
//     var data =await response.json();
//     console.log(data);

// }
// checkWeather();
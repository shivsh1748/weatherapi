
var search= document.getElementById('search');

search.addEventListener("keyup", (e) => {
    if(e.keyCode===13){
var getCityName =e.target.value;
    }
    getWeather(getCityName);
});

function getWeather(getCityName){
// console.log(getCityName);
const weatherApi =
`http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=25f9de1e686dae9bba656f0c4e15249c`

window.fetch(weatherApi)
.then(data =>{
    data.json()
    .then(weather =>{
        var output="";
        // console.log(weather);
        // console.log(weather.coord.lon);
        // console.log(weather.coord.lat);
var weatherData = weather.weather;
        // array here
        for(let x of weatherData){
            output += `
            <div class="col-md-4 offset-4 mt-4 ard"
            <div class="card-ready">
            <h1>${weather.name}</h1>
            <span class="icon">
            <img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
            <p><span>temp:</span>
            <span class="temp">${weather.main.temp}&deg;c</span></p>
            <span class="des  float-right">${x.main}</span>
            <span class="des float-left">${x.description}</span>
            </div>
            </div>
            `;
            document.getElementById("template").innerHTML=output;
// console.log(x);
// console.log(x.id);
// console.log(x.main);
// console.log(x.description);
// console.log(x.icon);
        }
      
    }).catch(err => console.log(err));
})
.catch(err => console.log(err));
}
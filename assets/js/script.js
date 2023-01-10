//Variable declaration: 
var citysearchFormEl = document.querySelector("#city-search-form");
var cityEl = document.querySelector("#city");
var pastsearchBtn = document.querySelector("#past-search-buttons")
var currentweatherContainerEl = document.querySelector("#current-weather-container");
var fivedayForecastContainerEl = document.querySelector("#five-day-forecast");
var foreCastEl = document.querySelector("#forecast");
var searchedCityEl = document.querySelector("#searched-city");
//Array for my Cities list
var CitiesArr = [];

var currentCityWeather = function(city) {
    var apiKey = "a3831faa6502826b12c492add275b36e"  //my personal key from openweather.
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}"

    fetch{apiUrl}
    .then(function(response) {
        response.json().then(function(data){
            showWeather(city, data);
        });
    });
};

//this is going to be my function where I am getting my dt from api calls for city. 
var showWeather = function(weather, searchCity) {
    currentweatherContainerEl.textContent = "";
    searchedCityEl.textContent = searchCity;

    //going to create my city/date: Temp: Wind: Humidity: 
    var currentDate = document.createElement("span");
    currentDate.textContent = " (" moment(weather.dt.value).format("MMM D, YYYY") + ") ";
    searchedCityEl.appendChild(currentDate);

    var Icon = document.createElement("img");
    Icon.setAttribute("src", "https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png");
    searchedCityEl.appendChild(Icon);

    var currentCityTemperature = document.createElement("span");
    currentCityTemperature.textContent = "Temp: " + weather.main.temp + " °F";
    currentCityTemperature.classList = "list-group-item" 

    var currentCityWind = document.createElement("span");
    currentCityWind.textContent = "Wind: " + weather.wind.speed + " MPH";
    currentCityWeather.classList = "list-group-item" 

    var currentCityHumid = document.createElement("span");
    currentCityHumid.textContent = "Humidity: " + weather.main.humidity + " %";
    currentCityHumid.classList = "list-group-item" 

    //now I need to append the child element again to put in the weather container.. 
    currentweatherContainerEl.appendChild(currentCityTemperature);
    currentweatherContainerEl.appendChild(currentCityWind);
    currentweatherContainerEl.appendChild(currentCityHumid);


}




//Need a function to do the 'submit click' and do the search
 var citySubmit = function(event) {
    event.preventDefault();
    console.log(event);

    //local variable for my city search
    //need my function for current city weather
    //need my function for the 5-day forecast
    //need my funciton for savedSearch 
    //need my function for the past searchedCity

    var city = cityEl.value.trim();
        if (city) {



        }
    
 }




citysearchFormEl.addEventListener("submit", citySubmit);
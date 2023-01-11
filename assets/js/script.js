//Variable declaration: 
var cityFormEl = document.querySelector("#city-search-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#current-weather-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forecast");
var forecastContainerEl = document.querySelector("#five-day-forecast");
var pastsearchBtn = document.querySelector("#past-search-buttons");
//Array for my Cities list
var cities = [];


//Need a function to do the 'submit click' and do the search
var citySubmitSearch = function(event) {
    event.preventDefault();
    var city = cityInputEl.value.trim();
        if (city) {
            currentCityWeather(city);
            getFiveDayForeCast(city);
            cities.unshift({city});
            cityInputEl.value = "";
        } else {
            console.alert("Please Enter A City!");
        }
    //here I am calling my functions for past searches of cities and what is saved. 
    savedCitySearch();
    pastCitySearch(city);
 }
//This is my function that is storing my data locally to the webpage. 
 var savedCitySearch = function() {
    localStorage.setItem("cities", JSON.stringify(cities));
 };

var currentCityWeather = function(city) {
    var apiKey = "7d7c4de058f3c932d835b1c88eb5ec8c"
    var apiURL =  `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=imperial`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            showcurrentCityWeather(data, city);
        });
    });
};


//this is going to be my function where I am getting my dt from api calls for city. 
var showcurrentCityWeather = function(weather, searchCity) {
    weatherContainerEl.textContent= "";  
    citySearchInputEl.textContent=searchCity;

    //going to create my city/date: Temp: Wind: Humidity: 
    var currentDate = document.createElement("span")
    currentDate.textContent=" (" + moment(weather.dt.value).format("MMM D, YYYY") + ") ";
    citySearchInputEl.appendChild(currentDate);

    var weatherIcon = document.createElement("img")
   weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
   citySearchInputEl.appendChild(weatherIcon);

   var temperatureEl = document.createElement("span");
   temperatureEl.textContent = "Temperature: " + weather.main.temp + " °F";
   temperatureEl.classList = "list-group-item"

   var windSpeedEl = document.createElement("span");
   windSpeedEl.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
   windSpeedEl.classList = "list-group-item"

    var humidityEl = document.createElement("span");
    humidityEl.textContent = "Humidity: " + weather.main.humidity + " %";
    humidityEl.classList = "list-group-item"

    //now I need to append the child element again to put in the weather container.. 
    weatherContainerEl.appendChild(temperatureEl);
    weatherContainerEl.appendChild(windSpeedEl);
    weatherContainerEl.appendChild(humidityEl);


}


var getFiveDayForeCast = function(city){
    var apiKey = "7d7c4de058f3c932d835b1c88eb5ec8c"
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            getFiveDayForeCast(data);
        });
    });
};

var showfiveDayForeCast = function () {
    forecastContainerEl.textContent = "";
    forecastTitle.textContent = "5-Day Forecast:";

    var forecast = weather.list;

        for (var i = 5; i < forecast.length; i = i+8) {
        var dailyForecast = forecast[i];
        
        var forecastEl = document.createElement("div");
        forecastEl.classList = "card bg-primary text-light m-2";

        var forecastDate = document.createElement("h5");
        forecastDate.textContent = moment.unix(dailyForecast.dt).format("MMM D, YYYY");
        forecastDate.classList = "card-header text-center";
        forecastEl.appendChild.apply(forecastDate);

        var weatherIcon = document.createElement("img")
        weatherIcon.classList = "card-body text-center";
        weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}@2x.png`);

        var forecastTemperature = document.createElement("span");
        forecastTemperature.classList = "card-body text-center";
        forecastTemperature.textContent = dailyForecast.main.temp + " °F";
        

        // var foreCastWind = document.createElement("span");
        // foreCastWind.classList = "card-body text-center";
        // foreCastWind.textContent =   dailyForecast.main.wind.speed + " MPH"
       

        var forecastHumidity = document.createElement("span");
        forecastHumidity.classList = "card-body text-center";
        forecastHumidity.textContent = dailyForecast.main.humidity + " %"
        
        forecastEl.appendChild(weatherIcon);
        dailyForeCast.appendChild(forecastTemperature);
        // dailyForeCast.appendChild(foreCastWind);
        dailyForecast.appendChild(forecastHumidity);
    }

}

 //creating my buttons from the past searches that are on the list. 
 var pastCitySearch = function (pastSearch) {
    pastSearchEl = document.createElement("button");
    pastSearchEl.textContent = pastSearch;
    pastSearchEl.classList = "d-flex w-100 btn-light border p-2";
    pastSearchEl.setAttribute("data-city", pastSearch);
    pastSearchEl.setAttribute("type", "submit");
    pastsearchBtn.prepend(pastSearchEl);

 }

 var pastCitySearchHistory = function(event) {
    var city = event.target.getAttribute("data-city");
    console.log(event);
    if (city) {
        currentCityWeather(city);
        getFiveDayForeCast(city);
    }
 }

cityFormEl.addEventListener("submit", citySubmitSearch);
pastsearchBtn.addEventListener("submit", pastCitySearchHistory);

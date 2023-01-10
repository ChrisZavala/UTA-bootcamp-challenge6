//Variable declaration: 
var citysearchFormEl = document.querySelector("#city-search-form");
var cityEl = document.querySelector("#city");
var pastsearchBtn = document.querySelector("#past-search-buttons")
var currentweatherContainerEl = document.querySelector("#current-weather-container");
var fivedayForecastContainerEl = document.querySelector("#five-day-forecast");
var foreCastEl = document.querySelector("#forecast");
var searchedCityEl = document.querySelector("#searched-city");

//Need a function to do the 'submit click' and do the search
 var citySubmit = function(event) {
    event.preventDefault();
    console.log(event);

    //local variable for my city search
    // var city = cityEl.
    
 }








citysearchFormEl.addEventListener("submit", citySubmit);
$(document).ready(function() {



// Create multiple functions within your application to handle the different parts of the dashboard:
var city = $("")
// Current conditions
function currentCondition(city) {
    // var APIKey = "080e4bdb531f4a9f422244e5bb6b3460";
    // var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" + city + "id=524901&APPID= " + APIKey;
    var city = $(this).attr("#get-weather");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        city;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Constructing HTML containing the weather information
        // var cityName = $("<h1>").text(response.city);
        // var weatherDate = $("<a>").text(response.date);
        // var iconImage = $("<h2>").text(response.icon);
        // var humidityCity = $("<h2>").text(response.himidity);
        // var windSpeedCity = $("<h2>").text(response.wind);
        // var UVIndexCity = $("<h2>").text(response.UV);

        // $("#searches-view").append(cityName, weatherDate, iconImage, humidityCity, windSpeedCity, UVIndexCity);
    });

};
// Event handler for user clicking the select-artist button
$("#search-weather").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputCity = $("form-control").val().trim();

    // Running the searchBandsInTown function(passing in the artist as an argument)
    currentConditions(inputCity);
});

// 5-Day Forecast
function fiveDayForecast() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);
        });

};
// Search history
function searchHistory() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);
        });

};
// UV index
function UVIndex() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);
        });

};
};

$(document).ready(function () {

    function currentConditions(city) {

        $("#currentweather-view").empty();

        var APIKey = "080e4bdb531f4a9f422244e5bb6b3460";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var cityName = $("<h2>").html("City: " + response.name);
            console.log(city);

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2) + "°F";
            tempF = tempF.toString().replace(/^(\d+)?([.]?\d{0,2})?$/, "");
            console.log(tempF);

            var iconImage = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
            iconImage.attr("width", 50);
            console.log(iconImage);
            var humidityCity = $("<h4>").html("Humidity: " + response.main.humidity);
            console.log(humidityCity)
            var windSpeedCity = $("<h4>").html("Wind Speed: " + response.wind.speed);
            console.log(windSpeedCity);
            $("#currentweather-view").append(cityName, iconImage, tempF, humidityCity, windSpeedCity);
        });
    };

    function fiveDayForecast(city) {
        $("#fivedayweather-view").empty();
        var APIKey = "080e4bdb531f4a9f422244e5bb6b3460";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var cityName = $("<h2>").text(response.name);
            console.log(city);
            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed(2) + "°F";
            tempF = tempF.toString().replace(/^(\d+)?([.]?\d{0,2})?$/, "");
            console.log(tempF);
            var iconImage = $("<h4>").text(response.weather[0].main);
            console.log(iconImage);
            var humidityCity = $("<h4>").text(response.main.humidity);
            console.log(humidityCity)
            $("#fivedayweather-view").append(cityName, tempF, iconImage, humidityCity, windSpeedCity, UVIndexCity);
        });
        fiveDayForecast();
    };
    function UVIndexCity(latitude, longitude) {
        $("#currentweather-view").empty();
        var APIKey = "080e4bdb531f4a9f422244e5bb6b3460";
        var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + latitude + "&lon=" + longitude;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var latitude = $("<h4>").text(response.coord.lat);
            var longitude = $("<h4>").text(response.coord.lon);
            console.log(UVIndexCity);
            $("#currentweather-view").append(UVIndexCity);
        });
    };
        // Event Listener "Get Weather" listening for a click on the button


        $("#get-weather").on("click", function (event) {
            event.preventDefault();
            var inputCity = $(".form-control").val().trim();
            // console.log(inputCity);
            var button = $("<button>");
            button.addClass("searchHistory");
            button.text(inputCity);
            $("#searches-view").prepend(button);
            currentConditions(inputCity);
            $(".form-control").val("");
        });
    
});

// $(document).ready(function () {
//     $("#get-weather").click(function () {

//     });


    // Create multiple functions within your application to handle the different parts of the dashboard:
    // Current conditions
    function currentConditions(city) {
        $("#currentweather-view").empty();
        var APIKey = "080e4bdb531f4a9f422244e5bb6b3460";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            // Constructing HTML containing the weather information
            var cityName = $("<h2>").text(response.name);
            var iconImage = $("<h2>").text(response.weather[0].icon);
            var humidityCity = $("<h2>").text(response.main.humidity);
            var windSpeedCity = $("<h2>").text(response.wind);
            var UVIndexCity = $("<h2>").text(response.UV);

        // Converts the temp to Kelvin with the below formula
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            tempF = tempF.toString().replace(/^(\d+)?([.]?\d{0,2})?$/, "");
            $("#currentweather-view").append(cityName, tempF);
        });

    };
    $("#get-weather").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the artist name
        var inputCity = $(".form-control").val().trim();
        console.log(inputCity);
        var button = $("<button>");
        button.addClass("searchHistory");
        button.text(inputCity);
        $("#searches-view").prepend(button);
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

var forismaticURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"


$(document).ready(function() {
    
    scrollingQuote();
    getLocation();

    function getWeatherInfo(latitude, longitude) {
        var weatherInfoURL = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
        $("span").text(weatherInfoURL);       
        $.get(weatherInfoURL, function(data) {
            // weather
            var weatherMain = data.weather[0].main;
            var weatherDescription = data.weather[0].description;
            var weatherIcon = data.weather[0].icon;
            // temperature
            var temp = data.main.temp;
            var humidity = data.main.humidity;
            var tempMin = data.main.temp_min;
            var tempMax = data.main.temp_max;
            // wind
            var windSpeed = data.wind.speed;
            var windDeg = data.wind.deg;
            //sys 
            var message = data.sys.message; // i don't know what this does or means.
            var country = data.sys.country;
            var sunrise = data.sys.sunrise;
            var sunset = data.sys.sunset;
            var cityName = data.name;

            // Display the returned data in browser
            $("#testArea").html("temp: " + temp + " windSpeed: " + windSpeed + " Weather: " + weatherMain + " Description: " + weatherDescription
                + " icon: " + "<img src=" + weatherIcon + ">" + " Country: " + country + " City: " + cityName);
        }); 

    };


    function scrollingQuote() {
   
        $.getJSON(forismaticURL, function(data) {
            var quote = data.quoteText;
            var author = data.quoteAuthor;
            $("header").html(quote + " - " + author);
      
        });

    }
    function getLocation() {
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            getWeatherInfo(latitude, longitude);      
            });
        } 
    
    }

});
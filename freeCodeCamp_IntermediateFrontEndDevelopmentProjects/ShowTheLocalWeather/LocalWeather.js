
var forismaticURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
var sun = '<img class="weather-scene-styling" src="projectArt/sun.svg">';

$(document).ready(function() {
    $.ajaxSetup({ cache: false });
   
      //showQuote();    
    
    getLocation();
    getDateTime();

    function getWeatherInfo(latitude, longitude) {
        var weatherInfoURL = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
        

        $.get(weatherInfoURL, function(data) {
            // weather
            var weatherMain = data.weather[0].main; //might or might not need.
            var weatherDescription = data.weather[0].description; //done
            var weatherIcon = data.weather[0].icon; //done
            // main
            var temp = data.main.temp; //done
            var humidity = data.main.humidity; //done
            var tempMin = data.main.temp_min; //done
            var tempMax = data.main.temp_max; //done
            // wind
            var windSpeed = data.wind.speed; //done
            var windDeg = data.wind.deg; //done
            //sys 
            var country = data.sys.country; //done
            var sunrise = new Date (data.sys.sunrise); //done
            var sunset = new Date(data.sys.sunset); //done
            var cityName = data.name; //done
            displayWeatherScene(weatherMain);
           
            // Display the returned data in browser
            $(".weather-data").html(
                " City: " + cityName +
                " Country: " + country + 
                "</br>" + 
                " icon: " + "<img src=" + weatherIcon + " alt='Weather Icon ' align='middle'>" +
                "temp: " + temp + 
                "</br>" +
                " Description: " + weatherDescription +
                "</br>" + 
                " temp max: " + tempMax +
                " temp min: " + tempMin +
                " Humidity: " + humidity +
                "</br>" + 
                "WindDeg:" + windDeg + 
                " windSpeed: " + windSpeed +
                "</br>" + 
                "Sunrise: " + sunrise +
                "Sunset: " + sunset
                                   
            );
            $("span").text(weatherInfoURL + "weatherMain is: " + weatherMain); //test area - remove when done.
        }); 
      
    };

    //on hold $('.marquee').marquee();
    
    
    /*
    function showQuote() {
        $("#scrolling-quote").html("")
            .show("slide", { direction: "right" }, 100)
            .hide("slide", { direction: "left" }, 100);
        $.getJSON(forismaticURL, function(data) {
            var quote = data.quoteText;
            var author = data.quoteAuthor;    
            var fullQuote = quote + " - " + author;
        
        $("#scrolling-quote").html(fullQuote)
        .show("slide", { direction: "right" }, 10000)
        .hide("slide", { direction: "left" }, 10000);
              
        }); 
        setTimeout(
            $("scrolling-quote").
            , 5000); 
        
    }
*/
    function getLocation() {
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            getWeatherInfo(latitude, longitude);      
            });
        } 
    
    }

    function displayWeatherScene(weatherMain) {
        
        switch(weatherMain) {
            case "Clear":    
                $("#weather-scene").html("<img src='projectArt/sun.svg'>");              
                $("#weather-scene").css({ "background-color": "#7ec0ee"});
                break;
            case "Clouds":    
                $("#weather-scene").html("<img src='projectArt/cloud.svg'>");
                $("#weather-scene").css({ "background-color": "#4a708b"});
                break;
            case "Haze":    
                $("#weather-scene").html("<img src='projectArt/cloud.svg'>");
                $("#weather-scene").css({ "background-color": "#4a708b"});
                break;
            default:
            $("#weather-scene").html("COME BACK FOR YOUR WEATHER FIX LATER..go get a burger.");
        }
    }

    function getDateTime () {
        var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        var today = new Date();
        var weekday = weekDays[today.getDay()];
        
        var date = weekday + ' ' + today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time; 
        $(".date-time").text(dateTime);
    }

}); 
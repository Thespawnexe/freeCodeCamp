
var forismaticURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
var sun = '<img class="weather-scene-styling" src="projectArt/sun.svg">';

$(document).ready(function() {
    $.ajaxSetup({ cache: false });
   
      //showQuote();    
    
    getLocation();
    

    function getWeatherInfo(latitude, longitude) {
        var weatherInfoURL = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
        
        $(".buttonF").html("<button>°F</button>");
        $(".buttonC").html("<button>°C</button>");

        $.get(weatherInfoURL, function(data) {
            // weather
            var weatherMain = data.weather[0].main; //might or might not need.
            var weatherDescription = data.weather[0].description; //done
            var weatherIcon = data.weather[0].icon; //done
            // main
            var temp = Math.floor(9/5 * data.main.temp + 32); // 
            var humidity = data.main.humidity; //done
            var tempMin = Math.floor(9/5 * data.main.temp_min + 32); //done
            var tempMax = Math.floor(9/5 * data.main.temp_max + 32); //done
            // wind
            var windSpeed = data.wind.speed; //done
            var windDeg = data.wind.deg; //done
            //sys 
            var country = data.sys.country; //done
            var sunriseUTC = new Date(data.sys.sunrise * 1000); //done
            var sunsetUTC = new Date(data.sys.sunset * 1000); //done            
            var cityName = data.name; //done

            sunrise = sunriseUTC.getHours() + ':' + sunriseUTC.getMinutes();    
            sunset = sunsetUTC.getHours() + ':' + sunsetUTC.getMinutes();
            var tempFC = "F";        
            
            $(".buttonF").click(function() {
                temp = Math.floor(9/5 * data.main.temp + 32);
                tempMin = Math.floor(9/5 * data.main.temp_min + 32);
                tempMax = Math.floor(9/5 * data.main.temp_max + 32);
                tempFC = "F";
                $(".main-temp").html("<div class='main-temp'>" + temp + "° " + tempFC + "</div>" );
                $(".temp-min-max").html("<div class='temp-min-max'>" + tempMax + "° " + tempFC +
                " / " + tempMin + "° " + tempFC + "</div>");
            });

            $(".buttonC").click(function() {
                temp = Math.floor(data.main.temp);
                tempMin = Math.floor(data.main.temp_min);
                tempMax = Math.floor(data.main.temp_max);
                tempFC = "C";
                $(".main-temp").html("<div class='main-temp'>" + temp + "° " + tempFC + "</div>" );
                $(".temp-min-max").html("<div class='temp-min-max'>" + tempMax + "° " + tempFC +
                " / " + tempMin + "° " + tempFC + "</div>");
            });

            getDateTime(cityName, country);
            displayWeatherScene(weatherMain, sunriseUTC, sunsetUTC);
            
            // Display the returned data in browser
            
            $(".weather-data").html(
                "<ul><li><div class='main-temp'>" + temp + "° " + tempFC + 
                  
                "</div><img src=" + weatherIcon + " alt='Weather Icon ' align='middle'></li>" +
                 
                "<li><div class='temp-min-max'>" + tempMax + "° " + tempFC +
                " / " + tempMin + "° " + tempFC + "</div></li>" +
                "<li>" + weatherDescription.toUpperCase() + "</li>" +
                 
                 
                "<li> Humidity - " + humidity + "%" + "</li>" +
                 
                "<li>WindDeg: " + windDeg + 
                " wind Speed: " + windSpeed + "</li>" +
                 
                "<li>Sunrise: " + sunrise + ' AM' +
                " Sunset: " + sunset + ' PM' + "</li></ul>"                    
            );

            $("span").text(weatherInfoURL + "weatherMain is: " + weatherMain); //test area - remove when done.
        }); 
      
    };

    function getLocation() {
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            getWeatherInfo(latitude, longitude);      
            });
        } 
    
    }

    function displayWeatherScene(weatherMain, sunriseUTC, sunsetUTC) {
        var timeCompare = new Date();

        if (timeCompare >= sunriseUTC) {
            $("#weather-scene").html("<img src='projectArt/sun.svg'>");              
            $("#weather-scene").css({ "background-color": "#7ec0ee"});            
        } else {
            $("#weather-scene").html("<img src='projectArt/full-moon.svg'>");              
            $("#weather-scene").css({ "background-color": "#191970"});
        }
        

        /*
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
        */
    }

    function getDateTime (cityName, country) {
        var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var today = new Date();
        //date vars
        var weekday = weekDays[today.getDay()];
        var year = today.getFullYear();
        var month = months[today.getMonth()];
        var day = today.getDate();
        //time vars
        var hour = today.getHours();
        var minutes = today.getMinutes();
        var ampm = ''; 
        
        if (day < 10) {
            day = '0' + day;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (hour > 11 ) {
            ampm = ampm + ' PM';
        } else {
            ampm = ampm + ' AM';
        }

        var date = weekday + ' - ' + month + ', ' + day + ' ' + year;
        var time = hour + ":" + minutes + ' ' + ampm;
        var dateTime = date + ' ' + time; 
        $(".date-time").html(cityName + ", " + country + "</br>" + dateTime);
    }

            
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

}); 
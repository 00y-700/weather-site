
  //Variables
var submit = document.querySelector("#submit");
var ZIP = document.querySelector("#zip").value;
var APIKey = "777c3cb80e0d9493508e59afe3736831";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=" + ZIP + "&appid=" + APIKey;

   //AJAX call
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {

     // Create CODE HERE to Log the queryURL
     console.log(queryURL);
     // Create CODE HERE to log the resulting object
     console.log(response);
     // Create CODE HERE to calculate the temperature (converted from Kelvin)
     var K = (response.main.temp);
     var F = Math.trunc((K - 273.15) * 1.80 + 32);
     // Create CODE HERE to transfer content to HTML
     $(".wind").append(response.wind.speed);
     $(".humidity").append(response.main.humidity);
     // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
     // Create CODE HERE to dump the temperature content into HTML
     $(".temp").append(F);

   });


   
    $(submit).on("click", location.reload());
   
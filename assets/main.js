
  //Variables
var submit = document.querySelector("#submit");
var ZIP = document.querySelector("#zip").value[""];
var APIKey = "777c3cb80e0d9493508e59afe3736831";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP}&appid=` + APIKey;
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=84040&appid=" + APIKey;


$("#submit").on("click", function() {
  console.log(ZIP)
    //AJAX call
   $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var K = (response.main.temp);
    var F = Math.trunc((K - 273.15) * 1.80 + 32);
    $(".wind").append(response.wind.speed);
    $(".humidity").append(response.main.humidity);
    $(".temp").append(F);

  });
});

   


   
    
   
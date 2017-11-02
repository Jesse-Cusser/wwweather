

$(document).ready(function(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){


			var lat  = position.coords.latitude;
			var long = position.coords.longitude;

			var url = "http://api.openweathermap.org/data/2.5/weather?&id=2172797";
			var apiKey = "APPID=90c2aa55436224d6c901df2dfcaf23ed"
			var api = url + "&" + apiKey + "&lat=" + lat + "&lon=" + long;
 
			

			$("#data").html("latitude: " + lat
			+ "<br>longitude: " + long);

		


		$.getJSON(api, function(data){
		//JSON call for open weather api

		var weatherType = data.weather[0].description;
		var temp = data.main.temp;
		var windSpeed = data.wind.speed;
		var city =data.name;
		alert(city + " " + weatherType+ " " + "temp" );

		alert(lat);
		alert(city);

	});
		});




	}


	

	





});


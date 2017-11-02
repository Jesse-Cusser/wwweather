

$(document).ready(function(){

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){


			var lat  = position.coords.latitude;
			var long = position.coords.longitude;

			var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?&id=2172797";
			var weatherApiKey = "APPID=90c2aa55436224d6c901df2dfcaf23ed"
			var weatherApi = weatherUrl + "&" + weatherApiKey + "&lat=" + lat + "&lon=" + long;
 			
 			
 			
			

			

		


		$.getJSON(weatherApi, function(data){
		//JSON call for open weather api

			var weatherType = data.weather[0].description;
			var kTemp = Math.round(data.main.temp);
			var cTemp = Math.round(kTemp - 273.15);
			var fTemp = Math.round(1.8 * cTemp + 32);
			var windSpeed = data.wind.speed;
			var city =data.name;
			var tempSwap = false;
			

			$("#city").html(city);
			$("#weatherType").html(weatherType);
			$("#temp").html(cTemp + "C*");
			$("#windSpeed").html(windSpeed);
			
			$("#temp").click(function(){
				if(tempSwap === false){
					$("#temp").html(fTemp + "F*");
					tempSwap=true;
				}else{
					$("#temp").html(cTemp + "C*");
					tempSwap=false;
				}

			});

	});
		});




	}


	

	





});


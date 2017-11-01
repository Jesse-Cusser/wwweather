//default APIkey - 90c2aa55436224d6c901df2dfcaf23ed
//FCC APIkey - 73f3dd10604b37faaf433b324707b0cb

$(document).ready(function(){


	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			$("#data").html("latitude: " + position.coords.latitude
			+ "<br>longitude: " + position.coords.longitude);
		});
	}


	var api = "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=90c2aa55436224d6c901df2dfcaf23ed";

	$.getJSON(api, function(data){
		//JSON call for open weather api

	});





});


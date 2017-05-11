//   IKINCI OLARAK EKLEMEK ISTEDIGIM URL LER
//461907d1493ba089

//Rösta på ett recept   GET 


// JavaScript (jQuery) för att hämta SMHI data (med AJAX)

function showVoteScone() {
	$("#messageDivS").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones",
		success: function (data) {
			$('#ratingS').text(data.rating);
			$('#voteS').text(data.votes);
			$('#recipeS').text(data.recipe);
			$("#messageDivS").empty();
		},
		
	});
}


$('.ratingScones a').click(function () {
	// Kod som körs när man klickar på knappen
	
	var rateValueS = $(this).text();
	var urlS = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=d7607304c8de1b93&recipe=scones&rating=5";
	var paramsS = "recipe=cronut&rating=" + rateValueS;
	paramsS = "";
	$("#messageDivS").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValueS },
		url: url + paramsS,
		success: function (data) {
			showVoteScone();
			$("#messageDivS").empty();
		}
	});
	return false;
});

$(document).ready( function(){
	showVoteScone();
});



////////////////////////////////////////// MI /////////////////////////////////////////////

function showVoteMi() {
	$("#messageDivM").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=ade853a9ad825ff1&recipe=creme_brulee",
		success: function (data) {
			$('#ratingM').text(data.rating);
			$('#voteM').text(data.votes);
			$('#recipeM').text(data.recipe);
			$("#messageDivM").empty();
		},
		
	});
}


$('.Mi a').click(function () {
	// Kod som körs när man klickar på knappen
	var rateValueM = $(this).text();
	var urlM = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=ade853a9ad825ff1&recipe=creme_brulee";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=ade853a9ad825ff1&recipe=creme_brulee&rating=5";
	var paramsM = "recipe=cronut&rating=" + rateValueM;
	paramsM = "";
	$("#messageDivM").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValueM },
		url: url + paramsM,
		success: function (data) {
			showVoteMi();
			$("#messageDivM").empty();
		}
	});
	return false;

});

$(document).ready( function(){
	showVoteMi();
});

////////////////////////////////// BENJAMIN ////////////////////////////////

function showVotesBenjamin() {
	$("#messageDivB").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=b716cea593bb104f&recipe=cronut",
		success: function (data) {
			$('#ratingB').text(data.rating);
			$('#voteB').text(data.votes);
			$('#recipeB').text(data.recipe);
			$("#messageDivB").empty();
		},
		
	});
}


$('.Benjamin a').click(function () {
	// Kod som körs när man klickar på knappen
	var rateValueB = $(this).text();
	var urlB = "	https://edu.oscarb.se/sjk15/api/recipe/?api_key=b716cea593bb104f&recipe=cronut";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=b716cea593bb104f&recipe=cronut&rating=5";
	var paramsB = "recipe=cronut&rating=" + rateValueB;
	paramsB = "";
	$("#messageDivB").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValueB },
		url: url + paramsB,
		success: function (data) {
			showVotesBenjamin();
			$("#messageDivB").empty();
		}
	});
		return false;


});

$(document).ready( function(){
	showVotesBenjamin();
});

////////////////////////////////// kate ////////////////////////////////////////////////


function showVotesKate() {
	$("#messageDivk").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=0f69fc1a7bf82398&recipe=varmlandstarta",
		success: function (data) {
			$('#ratingk').text(data.rating);
			$('#votek').text(data.votes);
			$('#recipek').text(data.recipe);
			$("#messageDivk").empty();
		},
		
	});
}


$('.kate a').click(function () {
	// Kod som körs när man klickar på knappen
	var rateValuek = $(this).text();
	var urlk = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=0f69fc1a7bf82398&recipe=varmlandstarta";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=0f69fc1a7bf82398&recipe=varmlandstarta&rating=5";
	var paramsk = "recipe=cronut&rating=" + rateValuek;
	paramsk = "";
	$("#messageDivk").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValuek },
		url: url + paramsk,
		success: function (data) {
			showVotesKate();
			$("#messageDivk").empty();
		}
	});
	return false;

});

$(document).ready( function(){
	showVotesKate();
});




/////////////////////////////////////////////////Emre////////////////////////////////////////////////




function showVotesEmre() {
	$("#messageDive").html("<b>Hämtar röster... Var god vänta...</b>");
	$.ajax({
		method: "GET",
		

		url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka",
		success: function (data) {
			$('#ratinge').text(data.rating);
			$('#votee').text(data.votes);
			$('#recipee').text(data.recipe);
			$("#messageDive").empty();
		},
		
	});
}


$('.emre a').click(function () {
	// Kod som körs när man klickar på knappen
	var rateValuee = $(this).text();
	var urle = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka";
	url = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=461907d1493ba089&recipe=tiger_kaka&rating=5";
	var paramse = "recipe=cronut&rating=" + rateValuee;
	paramse = "";
	$("#messageDive").html("<b>Skickar din röst... Var god vänta...</b>");

	$.ajax({
		method: "GET",
		data: { user_rating: rateValuee },
		url: url + paramse,
		success: function (data) {
			showVotesEmre();
			$("#messageDive").empty();
		}
	});
	return false;
});

$(document).ready( function(){
	showVotesEmre();
});

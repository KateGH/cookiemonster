var portions;
var myPoint = 0;
var isRated = false;
var n;
$('#votes').text(getLocalStorage("key2"));
$('#average').text(getLocalStorage("key3"));

function changePortion(n) {
	portions = document.getElementById("quantity").value;
	setLocalStorage("key1", portions);
	displayPortion(n);
}

function displayPortion(n) {
	console.log("n = " + n);
	portions = getLocalStorage("key1");
	displaySlider();
	var text = "person";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("selectedPortion").innerHTML = "for " + portions + " " + text;

	if (n == 1) {
		eggYolk();
		milk();
		sugar();
		cream();
		vanilla();
	} else if (n == 2) {
		eggScones();
		flourScones();
		bpScones();
		saltScones();
		butterScones();
		milkScones();
	}
}

window.onload = displayPortion;

function displaySlider() {
	$("#quantity").val(portions);
}

function eggScones() {
	var text = "egg";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("egg_scones").innerHTML = portions + " " + text;
}

function flourScones() {
	document.getElementById("flour_scones").innerHTML = 500 * portions + " g flour";
}

function bpScones() {
	document.getElementById("bp_scones").innerHTML = 2 * portions + " teaspoons baking powder";
}

function saltScones() {
	var text = "pinch";
	if (portions == 1) {
		text = text;
	} else {
		text += "es";
	}
	document.getElementById("salt_scones").innerHTML = portions + " " + text + " of salt";
}

function butterScones() {
	document.getElementById("butter_scones").innerHTML = 50 * portions + " g butter";
}

function milkScones() {
	document.getElementById("milk_scones").innerHTML = 200 * portions + " ml milk";
}


function eggYolk() {
	var text = "egg yolk";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("egg_yolk").innerHTML = portions + " " + text;
}

function milk() {
	document.getElementById("milk").innerHTML = 25 * portions + "ml full-fat milk";
}


function sugar() {
	document.getElementById("sugar").innerHTML = 10 * portions + "g sugar plus extra for the topping";
}

function cream() {
	document.getElementById("heavy_cream").innerHTML = 100 * portions + "ml heavy cream";
}

function vanilla() {
	var text = "vanilla pod";
	if (portions == 1) {
		text = text;
	} else {
		text += "s";
	}
	document.getElementById("vanilla_pod").innerHTML = portions + " " + text;
}


$('.ratingForm input').click(function() {
	if(!isRated) {
		$('#votes').html('<img src="../img/loader.gif">');
		$('#average').html('<img src="../img/loader.gif">');
		$.ajax({
			method: "GET",
			url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=984d3fec6c2e1f94&recipe=creme_brulee",
			success: function(data) {
				console.log(JSON.stringify(data));
				$('#votes').text(data.votes);
				$('#average').text(data.rating.toFixed(1));
				setLocalStorage("key2", data.votes);
				setLocalStorage("key3", data.rating.toFixed(1));
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  console.log(textStatus, errorThrown);
			}
		});
	}
});

$('.ratingForm input').click(function() {
	if(!isRated) {
		myPoint = ($('input[name=rating]:checked', '.ratingForm').val());
		$(this).next().slideUp();
		$(this).next().slideDown();
		console.log("this element: " + this);
		$.ajax({
			method: "GET",
			url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=984d3fec6c2e1f94&recipe=creme_brulee&rating=" + myPoint,
			success: function(data) {
				console.log(JSON.stringify(data));
				console.log("status: " + data.status);
				$('#myRating').text(myPoint);
				$(':radio:not(:checked)').attr('disabled', true);
				isRated = true;
			},
			error: function(jqXHR, textStatus, errorThrown) {
			  console.log(textStatus, errorThrown);
			}
		});
	}
});

$('.ratingForm label').hover(function() {
	if (!isRated) {
		var	value = ($('input[name=rating]:hover', '.ratingForm').val());
		var i = 0;
		while (i <= value) {
			$('label[for=star' + i + ']').css('backgroundImage', "url('../img/star_pink.png')");
			i++;
		}
	}
}, function() {
	if (!isRated) {
		$('.ratingForm label').css('backgroundImage', "url('../img/star_grey.png')");
	}
});

function getLocalStorage(key) {
	if(typeof(window.localStorage) != 'undefined'){
		portions = window.localStorage.getItem(key);
	} else {
		throw "window.localStorage, not defined";
	}
	return portions;
}

function setLocalStorage(key, value) {
	if(typeof(window.localStorage) != 'undefined'){
		window.localStorage.setItem(key, value);
	}
	else{
		throw "window.localStorage, not defined";
	}
}

$(document).ready(function(){
  $.get("include/header.html", function(data) {
    $("#header").html(data);
  });
});

$(document).ready(function(){
  $.get("include/footer.html", function(data) {
    $("#footer").html(data);
  });
});
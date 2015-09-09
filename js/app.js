function showDesc(e){
	e.preventDefault();
	/*var homeDiv = $(this).parent().parent();
	homeDiv.toggle();
	homeDiv.next().toggle();*/
}

function showHome(e){
	e.preventDefault();
	/*var descDiv = $(this).parent().parent();
	descDiv.toggle();
	descDiv.prev().toggle();*/
}

function setCardHeights(lineHeight) {
	var exps = document.getElementsByClassName('flipExp');
	var ports = document.getElementsByClassName('flipPort');
	var maxHeightExp = 0;
	var maxHeightPort = 0;
	var temp = 0, i = 0;
	for (i = exps.length - 1; i >= 0; i--) {
		temp = exps[i].getElementsByTagName('p')[0].offsetHeight + exps[i].getElementsByTagName('header')[0].offsetHeight;
		if (maxHeightExp < temp) {
			maxHeightExp = temp;
		}
	}

	// Setting Maxmimum of Portfolio cards to be same height as Exp Cards.
	// This is done to ensure that people can read the desc properly.
	// Else, height of portfolio cards won't go beyond three lines.
	maxHeightPort = maxHeightExp;
	for (i = exps.length - 1; i >= 0; i--) {
		temp = exps[i].getElementsByTagName('p')[0].offsetHeight + exps[i].getElementsByTagName('header')[0].offsetHeight;
		if (maxHeightExp > temp) {
			exps[i].getElementsByTagName('p')[0].style.marginTop = (maxHeightExp - temp)/2+"px";
		} else {
			exps[i].getElementsByTagName('p')[0].style.marginTop = "0px";
		}
	}
	maxHeightExp = maxHeightExp*1.75/lineHeight;
	for (i = exps.length - 1; i >= 0; i--) {
		exps[i].style.height = maxHeightExp+"em";
	}

	// Commented out code to find max portfolio card size, for reasons explained above.
	/*for (var i = ports.length - 1; i >= 0; i--) {
		temp = ports[i].getElementsByTagName('p')[0].offsetHeight + ports[i].getElementsByTagName('header')[0].offsetHeight;
		if (maxHeightPort < temp) {
			maxHeightPort = temp;
		}
	}*/
	for (i = ports.length - 1; i >= 0; i--) {
		temp = ports[i].getElementsByTagName('p')[0].offsetHeight + ports[i].getElementsByTagName('header')[0].offsetHeight;
		if (maxHeightPort > temp) {
			ports[i].getElementsByTagName('p')[0].style.marginTop = (maxHeightPort - temp)/2+"px";
		} else {
			ports[i].getElementsByTagName('p')[0].style.marginTop = "0px";
		}
	}
	maxHeightPort = maxHeightPort*1.75/lineHeight;
	for (i = ports.length - 1; i >= 0; i--) {
		ports[i].style.height = maxHeightPort+"em";
	}

}

function browserCheck() {
	var isMSIE = /*@cc_on!@*/false; //Detects IE 10- browsers
	var notTestedText = " I should warn you. CSS Transforms are a little glitchy on your browser!";
	var docTest = document.documentMode;
	if (isMSIE || docTest) {
		// I Still Don't trust you IE :(
		/*var mytext=document.createTextNode(notTestedText);
		document.getElementById("caption").appendChild(mytext);*/
	}
}

$(document).ready(function(){
	$('a.showDesc').click(showDesc);
	$('a.showHome').click(showHome);
	$(window).resize(function() {
		var lineHeight = 37.33;
		if ($(window).width() < 640) {
			lineHeight = 32.667;
		}
		setCardHeights(lineHeight);
	});

	browserCheck();

	// Code inspired from : http://codepen.io/johnmotyljr/pen/tkipE
	$('.flip').on({
        click: function() {
            $('.card', this).toggleClass('flipped');
        },
        mouseleave: function() {
            if ($('.card', this).hasClass('flipped')) {
                $('.card', this).removeClass('flipped');
            }
		}
	});
	// End Code from CodePen
});
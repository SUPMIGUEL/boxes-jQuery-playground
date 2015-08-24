$( document ).ready(function() {
    console.log( "ready for DOM manipulation!" );
/*    $("#secretBox").append( "<h1> secret box! </h1>" ).css( "background-color", "white" );
    
    $("#row1 div").removeClass().addClass( "box boxType3" );

	$("#row4 div:last").hide();

    $(".boxType1").css( "background-color", "white" );

    $("#row2 div").slice(0,2).removeClass();

    $("#container div").not(".row").not("#secretBox").width(2);
*/

// Exercise 3
	$("#container div .box").click(function(e) {
		console.log("X: "+ e.pageX + " Y: " + e.pageY);
		console.log(e);
	});

	$("#container div .boxType1").append("<h2><a href=http://www.galvanize.com>galvanize</a></h2>");
	$("#container div .boxType1").click(function(e) {
		alert("You can never leave the page.");
		e.preventDefault();
	});

	// For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.

	$(".box").click(function(e){
		if ($(this).children("img").length) {
			$(this).children("img").remove();
		}
		else{
			$(this).append( "<img src=puppy.jpg height=100px width=100px>" );
		}
	});

	// Write a click handler on the conatainer div. 
	// The click handler should turn the container 
	// background to black and the background of the 
	// original div that was clicked to white. 
	// If the user original div that was clicked happened 
	// to be the container div, change the background of 
	// the container div to lime green. 
	// You should not use any selectors for this exercise. 
	// You can do it completely with what is given to you in the event callback.

	$("#container").click(function(e){
		if ($(e.target).hasClass("box")) {
			console.log("box");
			$(this).css( "background-color", "black" );
			$(e.target).css( "background-color", "white" );
		}
		else{
			console.log("container");
			$(this).css( "background-color", "LimeGreen" );

		}
	});

});

//Otra forma más corta de hacerlo
/*

$(function() {
    console.log( "ready!" );
});

*/
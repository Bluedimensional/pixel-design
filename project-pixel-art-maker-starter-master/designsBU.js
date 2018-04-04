/*
*  Pixel Art Maker
*/
// $(document).ready(function() {
// random color generator
var randomColor = "#000000".replace(/0/g,function(){
	return (~~(Math.random()*16)).toString(16);
});

// set color picker for grid fill to a random color on page load
$('#colorPicker').attr('value', randomColor);
// set color picker for border to a random color on page load
$('#borderPicker').attr('value', randomColor);

// cache variables
var colorPicker = $('#colorPicker');
var borderPicker = $('#borderPicker');


// button to generate random hex color for grid fill color
$('#randomizeFill').on('click', function() {
	var randomColor = "#000000".replace(/0/g,function(){
		return (~~(Math.random()*16)).toString(16);
	});
	colorPicker.attr('value', randomColor);

});

// button to generate random hex color for grid border color
$('#randomizeBorder').on('click', function() {
	var randomColor = "#000000".replace(/0/g,function(){
		return (~~(Math.random()*16)).toString(16);
	});
	borderPicker.attr('value', randomColor);

});

//button to randomize border and fill
$('#randomizeBoth').on('click', function() {
	// Invoke random color function and assign to border and fill
	var randomColor = "#000000".replace(/0/g,function(){
		return (~~(Math.random()*16)).toString(16);
	});
	borderPicker.attr('value', randomColor);
	colorPicker.attr('value', randomColor);
});

// hide Design Canvas label until grid is created and do not re-hide it upon creation of a new grid
$(function() {
	$('#canvasLabel').hide();
});

// event listener to trigger grid creation
$('#submitButton').on('click', function makeGrid(e) {
	// show Design Canvas
	$('#canvasLabel').slideDown();
		// remove existing table children
		$('table tr').remove();
		// get values
		var inputHeight = $('#inputHeight').val();
		var inputWidth = $('#inputWidth').val();
	// hide Design Canvas to fade it in
	$('#pixelCanvas').hide();
  // use width input's value to create table rows
  for (x = 0; x < inputHeight; x++) {
  	$('#pixelCanvas').append('<tr></tr>');
  }
	// use height input's value to create table cells (inside the rows created above).
	for (y = 0; y < inputWidth; y++)  {
		$('#pixelCanvas').find('tr').append('<td></td>');
	}
	// fade in Design Canvas now that table rows and cells have been created.
	$('#pixelCanvas').fadeIn(700);
	e.preventDefault();
});

	// listen to the table for a click on any td
	$('#pixelCanvas').on('click mouseover', 'td', function() {
		// Get color from color picker
		var gridColor = $('#colorPicker').val();
		// Set the background color to the color picker's value.
		$(this).css('background-color', gridColor);
    // Set the border color to the border picker's value
    var borderPicker = $('#borderPicker').val();
    $(this).css('border-color', borderPicker);
});

// double click to remove both colors
$('#pixelCanvas').on('dblclick', 'td', function () {
        $(this).css('background-color', "");
        $(this).css('border-color', "#000000");
    });

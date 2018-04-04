/*
*  Pixel Art Maker
*/

// random color generator for border and fill color inputs (https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript?noredirect=1&lq=1)
var randomColor = "#000000".replace(/0/g,function(){
	return (~~(Math.random()*16)).toString(16);
});

// set color picker for grid fill to a random color
$('#colorPicker').attr('value', randomColor);
// set color picker for border to a different random color
$('#borderPicker').attr('value', randomColor);

// TODO wire Randomize button to invoke randomColor in addition to the randomization on page load.
$('#randomizeFill').on('click', function() {
	$('#colorPicker').attr('value', randomColor);
});

// TODO create randomize button for border color in HTML page, then have it invoke randomColor
//
//


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
	$('#pixelCanvas').on('click mousedown', 'td', function() {
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

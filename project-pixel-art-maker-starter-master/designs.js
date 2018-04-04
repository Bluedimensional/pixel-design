/*
*  Pixel Art Maker
*/

$(function() {
// random color generator
let generateColor = function(){
	let color = "#000000".replace(/0/g,function(){
		return (~~(Math.random()*16)).toString(16);
	});
	return color;
};

// cache variables
let $fillPicker = $('#fillPicker');
let $borderPicker = $('#borderPicker');
let $table = $('#pixelCanvas');
let $buttons = $('.randomColors');
let $canvasLabel = $('#canvasLabel');
let $radioButtons = $('#radioGroupBorderSize');

// set value of fill picker and border picker from random color generator
let generateFill = function() {
	$fillPicker.attr('value', generateColor());
}

let generateBorder = function () {
	$borderPicker.attr('value', generateColor());
}

// set border and fill pickers on page load
generateFill();
generateBorder();

// button to generate random hex color for grid fill color
$('#randomizeFill').on('click', function() {
	generateFill();
});

// button to generate random hex color for grid border color
$('#randomizeBorder').on('click', function() {
	generateBorder();
});

//button to randomize border and fill
$('#randomizeBoth').on('click', function() {
	// Invoke random color function and assign to border and fill
	generateBorder();
	generateFill();
});

// hide Design Canvas label until grid is created and do not re-hide it upon creation of a new grid
$(function() {
	$canvasLabel.hide();
});
// event listener to trigger grid creation
$('#createCanvas').on('click', function makeGrid(e) {
	// show Design Canvas
	$canvasLabel.slideDown();
		// remove existing table children
		$('table tr').remove();
		// get values
		let $inputHeight = $('#inputHeight').val();
		let $inputWidth = $('#inputWidth').val();
	// hide Design Canvas to fade it in
	$table.hide();
  // use width input's value to create $table rows
  for (x = 0; x < $inputHeight; x++) {
  	$table.append('<tr></tr>');
  }
	// use height input's value to create $table cells (inside the rows created above).
	for (y = 0; y < $inputWidth; y++)  {
		$table.find('tr').append('<td></td>');
	}
	// fade in Design Canvas now that $table rows and cells have been created.
	$table.fadeIn(700);
	e.preventDefault();
});
// TODO: make addRows button add a z rows with inputWidth columns
// add rows button
// $('#addRows').on('click', function () {
// 	let addRowsAmount = 4;
// 	for(z = 0; z < addRowsAmount; z++) {
// 		$table.append('<tr></tr>');
// 	}

// });
//TODO make a button to change the color of td cells AFTER they are filled in
// event listener? listen to a color input for a value change, and then do $('td')
// listen to a color input for a change, then get that value, then set the background color to that value!
	// listen to the $table for a click on any td
	$table.on('click mouseover', 'td', function() {
		// Get color from color picker
		// let gridColor = $fillPicker.val();
		// Set the background color to the color picker's value.
		$(this).css('background-color', $fillPicker.val());
	    // Set the border color to the border picker's value
	    // let $borderPicker = $('#borderPicker').val();
	    $(this).css('border-color', $borderPicker.val());
	});

	// TODO radio buttons that change border size when clicked.
	$radioButtons.on('click change', function () {
		// get value of radio button
		// $radioButtons.val();
		//set table border size to value from radio buttons
		$table.css('border-size', $radioButtons.val());
	});

	// double click to remove both colors
	$table.on('dblclick', 'td', function () {
		$(this).css('background-color', "");
		$(this).css('border-color', "#000000");
	});

  // fill even grid columns completely with color from current picker values
  $('#fillOddColumns').click(function() {
  	$table.children().find('td:odd').css('background-color', $fillPicker.val());
  });

  $('#fillEvenColumns').click(function() {
  	$table.children().find('td:even').css('background-color', $fillPicker.val());
  });
// Buttons to change $table's border size




// buttons to change grid size - td and tr height and width

});



$(document).ready(function() {

	// var files;
	// $('input[type=file]').on('change', function(e) {
	// 	files = e.target.files;
	// });
	// $('form').on('submit', function(e) {
	// 	console.log('onsubmit fired');
	// 	e.stopPropagation();
	// 	e.preventDefault();

	// 	var data = {};
	// 	$.each(files, function(key, value) {
	// 		data[key] = value;
	// 	});

	// 	$.ajax({
	// 		url: '/api/getfilemetadata/',
	// 		type: 'POST',
	// 		data: data,
	// 		error: function(jqXHR, textStatus, errorThrown) {
	// 			alert('Errors: ' + textStatus);
	// 		},
	// 		success: function(json) {
	// 			alert('File Size: ' + json.size);
	// 		}
	// 	});
	// });

	var options = {
		success: function(json) 
		{
			alert("Filesize : " + json.size);
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('Errors: ' + textStatus);
		}
	}

	$('form').ajaxForm(options);
});
	
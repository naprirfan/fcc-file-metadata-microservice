$(document).ready(function() {
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
	
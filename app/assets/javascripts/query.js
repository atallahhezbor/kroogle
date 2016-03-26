$(document).ready(function() {
	$('#ask-form').submit(function(event){
		// event.preventDefault();		
		// console.log("form submitted");
		var query = $('#query').val();
		$.ajax('welcome/get_response', {
				method: 'POST',				
				data: {
					query: query
				},
				success: function(response) {
					alert(response.text)
				},
				failure: function(response) {
					alert('failure');
				}
		});
	});
});
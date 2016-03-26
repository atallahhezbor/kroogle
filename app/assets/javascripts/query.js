$(document).ready(function() {
	$('#ask-form').submit(function(event){
		event.preventDefault();
		var query = $('#query').val();
		$('#response').append('<div class="sent message"><span>' + query + '</span></div>')
		
		$.ajax('welcome/get_response', {
				method: 'POST',				
				data: {
					query: query
				},
				success: function(response) {
					$('#response').append('<div class="received message">' + response.text + '</div>')
				},
				failure: function(response) {
					alert('failure');
				}
		});
	});
});
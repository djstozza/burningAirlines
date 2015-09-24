var getDestination = function () {
	$('select#destination option').hide();
	$('select#origin').on('change', function () {
		$('select#destination option').show();
		$('select#destination option').each(function () {
			
			if (this.value === $('select#origin').val()) {
				$(this).hide();
			}
		})


	})
}

$(document).ready(function() {
	
	getDestination();
});
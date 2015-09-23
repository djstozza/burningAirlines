var getDestination = function () {
	$('select#destination option').hide();
	$('select#origin').on('change', function () {
		$('select#destination option').show();
		$('select#destination option').each(function () {
			var $this = $(this);
			//if ($this.text(). -- has a relationship with the origin) {
				//$this.show()
			//} else {
				// this.hide();
			//}
		})


	})


}



$(document).ready(function() {
	getDestination();
});
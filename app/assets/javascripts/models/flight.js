var app = app || {};

app.Flight = Backbone.Model.extend({
	urlRoot: '/flights',
	defaults: {
		flight_number: '', origin: '', destination: '', airplane_id: '', date: '', rows: ''
	}
});

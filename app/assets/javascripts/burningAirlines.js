var app = app || {};

_.templateSettings = {
	evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   	interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
}

$(document).ready(function() {
	console.log('sonofa...')
	
	app.flights = new app.Flights();
	app.airplanes = new app.Airplanes();
	app.reservations = new app.Reservations();

	app.airplanes.fetch().done(function() {
		app.flights.fetch().done(function () {
			app.reservations.fetch().done(function () {

			app.router = new app.AppRouter();
			Backbone.history.start();

			});

		});
	});

	setInterval(function () {
		var a = new app.AppView()
		a.ajaxReservation(app.flight_id);
	}, 1000);
	
})

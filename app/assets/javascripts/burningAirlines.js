var app = app || {};

_.templateSettings = {
	evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
   	interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
}

$(document).ready(function() {
	console.log('sonofa...')
	
	app.flights = new app.Flights();
	app.flights.fetch().done(function () {
		app.router = new app.AppRouter();
		Backbone.history.start();
	});
})

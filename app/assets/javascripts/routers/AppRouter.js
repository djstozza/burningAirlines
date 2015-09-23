var app = app || {};

app.AppRouter = Backbone.Router.extend({
	routes: {
		'': 'show',
	},

	show: function () {
		app.flight_id = parseInt( window.location.pathname.replace( /\D+/, "" ) );

		// Make a new collection of flights
		// Pass that collection into an instance of AppView
		// Then call render

		//var appView = new app.AppView({ collection: app.flights })
		var appView = new app.AppView({ model: app.flights.get(app.flight_id) })
		// console.log('are you working???');
		appView.render();
	},


});
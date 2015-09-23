var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#show',
	render: function () {
		var appViewTemplate = $('#appViewTemplate').html();
		this.$el.html( appViewTemplate );

		// Figure out a loop to draw all of the seats
	}
	
});
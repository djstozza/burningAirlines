var app = app || {};

app.AppView = Backbone.View.extend({
	
	el: '#show',

	render: function () {
		var appViewTemplate = $('#appViewTemplate').html();
		var appViewHTML = _.template(appViewTemplate);

		var data = this.model.toJSON();

		var plane = app.airplanes.get(data.airplane_id).toJSON();
		data.rows = plane.rows;
		data.cols = plane.columns;

		var toAppend = this.$el.html(appViewHTML(data))

		this.$el.append( toAppend );



		// Figure out a loop to draw all of the seats
	}
	
});
var app = app || {};

app.AppView = Backbone.View.extend({
	
	el: '#show',


     events: {
    'click': 'chooseSeat',

  },

  chooseSeat: function (seat) {
  	var seatID  = seat.target.id
  	  seatID  = '#' + seatID 

  
  	console.log(seat.target.id)

  	    $(seatID).removeClass('box')
  		$(seatID).addClass('seatTaken'); 
     
  },

	render: function () {



		var appViewTemplate = $('#appViewTemplate').html();
		var appViewHTML = _.template(appViewTemplate);

		var data = this.model.toJSON();

		var plane = app.airplanes.get(data.airplane_id).toJSON();
		data.rows = plane.rows;
		data.cols = plane.columns;

		var toAppend = this.$el.html(appViewHTML(data))

		this.$el.append( toAppend );

		var seats = parseInt(data.rows) * parseInt(data.cols)

 


   for (var i = 0 ; i < data.rows ; i++) {
   	$('<div/>').addClass(i.toString()).appendTo('.seatplan');
   	for (var j = 0 ; j < data.cols ; j++) {
   		$('<div/>').addClass('box').attr('id', i.toString() + "_" + j.toString() ).appendTo('.' + i.toString());
   	}
   }
 }

}) 


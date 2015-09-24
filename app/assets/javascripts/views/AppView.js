var app = app || {};

app.AppView = Backbone.View.extend({
	
	el: '#show',


     events: {
    'click': 'chooseSeat',

  },

  initialize: function () {
    

    this.ajaxReservation(app.flight_id);
  },

  chooseSeat: function (seat) {
  	// console.log('the row is ' + seat.target.id.match(/(\d+)/)[0]);
  	// console.log('the column is ' + seat.target.id.match(/[0-9]$/)[0]);
    

  	var seatID  = seat.target.id
  	  seatID  = '#' + seatID 
     var rowSelected = seat.target.id.match(/(\d+)/)[0]
     var columnSelected = parseInt(seat.target.id.match(/[\d]$/)[0])
         console.log("row is " + rowSelected )
         console.log("column is " + columnSelected )


  
  	console.log(seat.target.id);
    this.ajaxReservation(app.flight_id);

  	    $(seatID).removeClass('box');
  		$(seatID).addClass('seatTaken'); 
     
     var res = new app.Reservation({
     	row: rowSelected,
     	column: columnSelected,
     	user_id: parseInt($('h6').html()),
     	flight_id: app.flight_id
     });

     console.log(res);

     res.save();
         
  },

  ajaxReservation: function (flight_id) {
    var url = '/reservations.json';
    var reservations = [];

    $.ajax({
        type     : 'get',
        url      : url,
        dataType : 'json',
        success  : function(response) {
            //iterate through all bookings for our event
            //console.log('AJAX CALL', response);
            reservations = response
            for (var i = 0; i < reservations.length; i++) {
              if ( reservations[i].flight_id === flight_id ) {
                var seatId = '#' + reservations[i].row + '_' + reservations[i].column;
                $(seatId).addClass('seatTaken')//.text('taken');

              }

            }


        }
    });


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

 


   for (var i = 1 ; i <= data.rows ; i++) {
   	$('<div/>').addClass(i.toString()).appendTo('.seatplan');
   	for (var j = 1 ; j <= data.cols ; j++) {
   		$('<div/>').addClass('box').attr('id', i.toString() + "_" + j.toString() ).appendTo('.' + i.toString());
   	}
   }
 }

}) 


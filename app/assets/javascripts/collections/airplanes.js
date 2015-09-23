var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: '/airplanes',
  model: app.Airplane,
  initialize: function () {
    // this.on('add', function (flight) {
    //   console.log('flight added');
    //   var flightView = new app.FlightView({model: flight});
    //   flightView.render();
    // });
  }
});
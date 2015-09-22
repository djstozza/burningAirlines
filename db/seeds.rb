# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all 
u1 = User.create :email => "brad_pitt@chicken.com", :name => "Brad", :surname => "Pitt", :password => 'chicken', :admin => true 
u2 = User.create :email => "edward_norton@chicken.com", :name => "Edward", :surname => "Norton", :password => 'chicken' 
u3 = User.create :email => "jared_leto@chicken.com", :name => "Jared", :surname => "Leto", :password => 'chicken'

Airplane.destroy_all
a1 = Airplane.create :name => "747", :rows => '10', :columns => '4'
a2 = Airplane.create :name => "380", :rows => '15', :columns => '4'
a3 = Airplane.create :name => "777", :rows => '18', :columns => '4'

Flight.destroy_all
f1 = Flight.create :flight_number => "BA100", :origin => "London", :destination => "Sydney", :date => "2015-11-21"
f2 = Flight.create :flight_number => "BA300", :origin => "Sydney", :destination => "London", :date => "2015-10-03"
f3 = Flight.create :flight_number => "BA100", :origin => "Los Angeles", :destination => "Paris", :date => "2015-12-21"

a1.flights << f1
a2.flights << f2
a3.flights << f3
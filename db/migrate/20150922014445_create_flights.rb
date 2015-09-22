class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :flight_number
      t.string :origin
      t.string :destination
      t.integer :airplane_id
      t.datetime :date

      t.timestamps null: false
    end
  end
end

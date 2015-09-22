json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_number, :origin, :destination, :airplane_id, :date
  json.url flight_url(flight, format: :json)
end

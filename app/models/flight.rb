# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :string
#  origin        :string
#  destination   :string
#  airplane_id   :integer
#  date          :datetime
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Flight < ActiveRecord::Base
	belongs_to :airplane

end

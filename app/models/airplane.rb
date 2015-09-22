# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string
#  rows       :integer
#  columns    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Airplane < ActiveRecord::Base
	has_many :flights

end

# Possible Objects: Development, Tenant, Apartment, Condo, Commercial Space
# Possible Floor object?
# apartment base rate 700
# + 300/bedroom 

# Method: Search listings by income

require "./space.rb"
require "./tenant.rb"
require "./application.rb"

class Development

	attr_reader :floor_count, :floors, :total_units, :rented_units

	def initialize(floor_count)
		@floor_count = floor_count
		@floors = []
		@total_units = []
		@rented_units = []

	end

	def rent_unit(unit)
		@rented_units.push(unit)
		unit.first_month_free = true if @rented_units.length <= 10
	end

	def add_floor(floor)
		@floors.push(floor)
		@unit_count += floor.spaces.length
	end

end

class Floor

	attr_reader :units, :spaces

	def initialize(units)
		@units = units
		@spaces = []
	end

	def add_space(space)
		@spaces.push(space)
		@units -= space.unit_count
	end

end



apt_building = Development.new(5)

apt_building.floor_count.times do |i|
	new_floor = Floor.new(5)

	new_floor.units.times do
		apt = Apartment.new(1, (i + 1))
		new_floor.add_space(apt)
	end
	apt_building.add_floor(new_floor)
end











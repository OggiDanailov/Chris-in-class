class Space

	attr_reader :use, :lease_term, :unit_count, :first_month_free

	def initialize(use)
		@use = use
		@first_month_free = false
	end

end

class Apartment < Space

	attr_reader :bedrooms, :rate, :floor

	def initialize(bedrooms, floor)
		@bedrooms = bedrooms
		@floor = floor
		@rate = calculate_rate
		@lease_term = 1
		@unit_count = 1
		super("residential")
	end

	def calculate_rate
		base_rate = 700
		room_premium = 300 * @bedrooms
		floor_premium = 30 * @floor

		base_rate + room_premium + floor_premium
	end
end

class Condo < Space

	def initialize
		@bedrooms = 2
	end

end

class Commercial < Space


	def initialize
		@unit_count = 1
		@rate = 5000
		@lease_term = 2
		super("commercial")
	end

end

class Restaurant < Commercial

	def initialize
		@unit_count = 2
		@rate = 12000
		@lease_term = 3
	end

end

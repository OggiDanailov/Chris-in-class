# class Bike

# 	attr_accessor :wheels, :brand, :color

# 	def initialize(brand, color)
# 		@wheels = 4
# 		@brand = brand
# 		@color = color
# 	end

# 	def add_training_wheels
# 		@wheels += 2 if @wheels == 4
# 	end

# end




# cruiser =  Bike.new(4, "Schwinn", "Red")
# cruiser.wheels
# returns 4
# cruiser.brand
# returns "Schwinn"




class Animal

	attr_reader :multicellular, :sentience, :nervous_system

	def create
		@multicellular = true
		@sentience = true
		@nervous_system = true
	end

end

class Mammal < Animal

	attr_accessor :blood, :name

	def initialize(name)
		@name = name
		@blood = "warm"
		create
	end

end

class GrossBug < Animal

	def initialize(name)
		@name = name
		@gross = true
		create
	end

end

class Arachnid < GrossBug

	attr_reader :legs

	def initialize(name)
		super
		@legs = 8
	end

end

# tiger = Mammal.new("Tiger")

# tiger.name

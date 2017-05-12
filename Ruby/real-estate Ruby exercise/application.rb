class Application
	def initialize(tenants, space)
		@tenants = tenants
		@space = space
	end

	def check_number_of_tenants
		if @space.bedrooms > 2 && tenants.length < 2
			puts "You need additional tenants"
		end
	end

	def check_renter_income
		total_income = 0
		@tenants.each do |tenant|
			total_income += tenant.monthly_income
		end
		if (total_income * 0.3) < @space.rate
			puts "Sorry, you do not qualify."
		else
			puts "Congratulations."
		end

	end

	def check_buyer_income
		total_income = 0
		@tenants.each do |tenant|
			total_income += tenant.monthly_income
		end
		total_income = total_income * 12
		if total_income < 40000
			puts "Sorry, you do not qualify."
		else
			puts "Congratulations."
		end
	end


end
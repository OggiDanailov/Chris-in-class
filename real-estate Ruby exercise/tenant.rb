class Tenant

	attr_reader :monthly_income

	def initialize(monthly_income)
		@monthly_income = monthly_income
	end

end

class Renter < Tenant

end

class Student < Renter

	attr_reader :cosigner

	def initialize(cosigner)
		@cosigner = cosigner
		@monthly_income = 0
	end

end

class Buyer < Tenant

end

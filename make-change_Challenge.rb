# Write a method that takes an amount and makes an array out of it using the lowest number of coins available. For example:

# >> make_change(39)
# => [25, 10, 1, 1, 1, 1]

def make_change(amount)
	coin_values = [25, 10, 5, 1]
	coins = []

	coin_values.each do |value|
		while amount >= value
			coins.push(value)
			amount -= value
		end
	end

	# while (amount - 25) >= 0
	# 	coins.push(25)
	# 	amount -= 25
	# end

	# while (amount - 10) >= 0
	# 	coins.push(10)
	# 	amount -= 10
	# end


	# while (amount - 5) >= 0
	# 	coins.push(5)
	# 	amount -= 5
	# end

	# while (amount - 1) >= 0
	# 	coins.push(1)
	# 	amount -= 1
	# end
	coins
end

coins_array = make_change(75)

print coins_array





# quarters = 3
# dimes = 1
# nickels = 0
# pennies = 3

# coins = [quarters, dimes, nickels, pennies]
# coin_values = [25, 10, 5, 1]
# returning_coins = []
# coins.each_with_index do |coin_amount, index|

# 	coin_amount.times do 
# 		returning_coins.push(coin_values[index])
# 	end

# end










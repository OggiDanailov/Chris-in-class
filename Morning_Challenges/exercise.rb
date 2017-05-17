# Troy's solution


# def even_numbers(array)
#     newarray=[]
#     array.each do |variable|    
#         newarray.push(variable) if variable %2 ==0
#     end
#     newarray
# end
# my_array=[1,2,3,4,5,6,7,8,9,10,13,18,22,23]
# p even_numbers(my_array)



# Pre-refactoring


# def even_array num_array

# 	num_array.select! do |num|
# 		num.even?
# 	end

# 	p num_array

# end

# my_array = [1, 5, 2, 3, 4, 8, 11, 10]

# even_array(my_array)


# Refactored

def even_numbers(num_array)
	num_array.select! { |num| num.even? }
end


my_array=[1,2,3,4,5,6,7,8,9,10,13,18,22,23]
p even_numbers(my_array)






def fibonacci num
   first_num = 0
   second_num = 1
   returning_array = [0, 1]
   (1..num).each do
       c = first_num + second_num
       first_num = second_num
       second_num = c
       returning_array.push(c)
   end
   p returning_array
end

fibonacci(10)


def fibonacci(num)
 array=[0,1];
 (num-2).times do
   array.push(array[-1] + array[-2])
 end
 p array
end
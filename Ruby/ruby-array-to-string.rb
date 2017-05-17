# Write a method that takes an array of names as an argument and returns a string of all of those names separated by commas. For instance, if I pass the array [“Chris”, “Oggi”, “Emily”] the method should return the string “Chris, Oggi, Emily”.
#
# Then write a method that takes a string as an argument. This method will use the returned value from the first method in order to construct a larger string. For instance, if I pass my second method the string “work here.” then the second method should return “Chris, Oggi, Emily work here.”
#
#  If you finish, make the method return the string with “and” before the last name. For instance: “Chris, Oggi, and Emily work here.”


def names_to_string(names)
	names[-1] = "and " << names[-1]
	names.join(", ")
end

def add_words(names_string, words) 
	names_string << " " << words 
end

employees = ["Chris", "Oggi", "Emily"]

employees_string = names_to_string(employees)

p add_words(employees_string, "work here.")
# Chris, Oggi, Emily work here


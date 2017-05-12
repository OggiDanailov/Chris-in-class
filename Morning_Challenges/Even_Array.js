// Write a function that takes an array of numbers and creates a new array with 
// only the even numbers from the first array. For instance, 
// if you pass your function an array of [1, 3, 4, 6, 9], your function should return [4, 6].



function evenArray(numArray) {
	returningArray = [];
	for (var i = 0; i < numArray.length; i++) {
		if (typeof numArray[i] % 2 === 0) {
			returningArray.push(numArray[i]);
		}
	}
	return returningArray;
}
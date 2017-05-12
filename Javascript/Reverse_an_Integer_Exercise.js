function reverseInt(num) {
	var numArray = String(num).split('').reverse();

	num.toString();

	for (var i = 0; i < numArray.length; i++) {
		numArray[i] = parseInt(numArray[i]);
	}

	return numArray;
}

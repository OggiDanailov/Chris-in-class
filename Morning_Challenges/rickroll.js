// Write a program that prints the numbers from 1 to 100. For multiples of three print “Rick” instead of the number and for the multiples of five print “Roll”. For numbers which are multiples of both three and five print "RickRoll".

rickRoll(100);

function rickRoll(num) {
	for (var i = 0; i <= num; i++) {

		var returningString = "";

		if (i % 3 === 0) {
			returningString += "Rick";
		}
		if (i % 5 === 0){
			returningString += "Roll";
		}
		
		console.log(i + ": " + returningString);
	}
}

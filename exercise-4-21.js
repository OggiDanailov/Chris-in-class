// Write two functions. The first function takes two arguments: an array of strings and a function. The second function takes a string as an argument. The first function should concatenate the strings within the array together and then pass it to the second function. The second function should print the concatenated string to the console. Think: callback functions.


function concatStrings(arrayOfStrings, callbackFunction) {
	var stringToBeReturned = "";
	for (var i = 0; i < arrayOfStrings.length; i++) {
		stringToBeReturned += arrayOfStrings[i] + " ";
	}

	// stringToBeReturned = arrayOfStrings.join(" ");

	callbackFunction(stringToBeReturned);
}


function printString(string) {
	console.log(string);
}

function printStringWithPunctuation(string) {
	console.log(string + "!!!!!!!!!!!");
}

var sentenceArray = ["hello", "my", "name", "is", "chris"];

concatStrings(sentenceArray, printString)

concatStrings(["hello", "my", "name", "is", "chris"], printStringWithPunctuation)








// Troy's solution


// function FirstFunction(array, otherFunction){
// 	var mystring=""
// 	for(var i=0;i<array.length;i++){
// 		if(i<array.length-1){
// 		mystring+=array[i] + " ";
// 		}else{
// 			mystring+=array[i]
// 		}
// 	}
// 	otherFunction(mystring);
// }
// function SecondFunction(string){
// 	console.log(string);
// }

// var arrayofstrings=["Hello", "my", "name", "is", "Troy."]
// FirstFunction(arrayofstrings, SecondFunction)
var names = ["Chris", "Oggi", "Emily"]; 

function concatArray(namesArray) {
	var returningString = "";

	for (var i = 0; i < namesArray.length; i++) {
		returningString += namesArray[i];
		if (i < namesArray.length - 2) {
			returningString += ", ";
		} else if (i === namesArray.length - 2) {
			returningString += ", and ";
		}
	}

	return returningString;

}

// function concatArray(namesArray) {

	// return namesArray.join(" and ");

// }

function buildSentence(string) {
	var nameString = concatArray(names);
	var sentenceString = nameString + string;
	return sentenceString;
}


names = ["hello", "chris"]
function hello() {
	// Function scope

	for (let i = 0; i < names.length; i++) {
		let name = "chris and oggi";
		// Block scope
		var message = "hello";

		const myConstant = "this is a constant";

		// myConstant = 4; // cannot be reassigned

	}

	console.log(i);
	console.log(message);
	// message can be called out here, but names cannot.

}

hello();

// console.log(myConstant);

// names


// let results = document.getElementsByClassName("results")

// for (let i = 0; i < results.length; i++) {
// 	results[i].addEventListener("click", function() {
// 		results[i].style.display = "none";
// 	})
// }

// i == 5







//

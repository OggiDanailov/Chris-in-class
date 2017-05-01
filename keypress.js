var addedStuff = document.getElementById("addedStuff");

// event.target.innerHTML = ("You pressed 'J'");
document.addEventListener("keypress", function(event){
	// if (event.keyCode === 106){ 
		addedStuff.innerHTML += "<div>You pressed " + event.key + "</div>";
	// }

console.log(event.charCode);
})


var kellogs = ["Corn Flakes", "Frosted Flakes", "Apple Jacks", "Honey Bunches of Oats"];

var post = ["Raisin Bran", "Honey Smacks", "Cookie Crisp", "Count Chocula"];

var cereal = [kellogs, post];

function printCereal() {

	for (var i = 0; i < cereal.length; i++) {
		var brand = cereal[i];
		cerealNames(brand);
	}

}

function cerealNames(brand) {
	for (var i = 0; i < brand.length; i++) {
		console.log(brand[i]);
	}
}

printCereal();
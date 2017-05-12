var kellogs = ["Corn Flakes", "Frosted Flakes", "Apple Jacks", "Honey Bunches of Oats"];

var post = ["Raisin Bran", "Honey Smacks", "Cookie Crisp", "Count Chocula"];

var cereal = [kellogs, post];

function printCereal() {

	for (var i = 0; i < cereal.length; i++) {
		var cerealBrand = cereal[i];
		cerealNames(cerealBrand);
	};

};

function cerealNames(brand) {
	for (var i = 0; i < brand.length; i++) {
		var newDiv = "<div>" + brand[i] + "</div>";
		var cerealBrandsDiv = document.getElementById("cerealBrands");
		cerealBrandsDiv.innerHTML += newDiv;
	};
};

printCereal();

var searchBtn = document.getElementById("search");
var searchTerm = document.getElementById("searchTerm");
var results = document.getElementsByClassName("results")[0];
var success = document.getElementsByClassName("success")[0];
var profile = document.getElementsByClassName("profile")[0];

searchBtn.addEventListener("click", searchGoogleBooks);
profile.addEventListener("click", showProfile);

function searchGoogleBooks() {
	var term = searchTerm.value;

	$.ajax({
		method: "GET",
		url: "https://www.googleapis.com/books/v1/volumes",
		data: {
			q: term
		},
		dataType: 'json',
		success: function(response) {
			console.log(response);
			response.items.forEach(function(book) {
				var resultDiv = document.createElement("div");
				resultDiv.classList.add("result");
				resultDiv.innerHTML = book.volumeInfo.title;
				results.append(resultDiv);
				resultDiv.addEventListener("click", function() {
					addBookToDb(book);
				});
			});

		}
	})
}

function addBookToDb(book) {
	var title = book.volumeInfo.title;
	var author = book.volumeInfo.authors[0];

	$.ajax({
		method: "POST",
		url: "/books",
		data: {
			title: title,
			author: author
		},
		success: function(response) {
			console.log(response)
			success.innerHTML = "Successfully added title: " + title;
		}
	})

}

function showProfile() {

	$.ajax({
		method: "GET",
		url: "/books",
		dataType: "json",
		success: function(response) {
			console.log(response);
		}
	})
}





//

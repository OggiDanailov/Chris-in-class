class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			status: "error",
			active: "Home"
		}

		this.updateActive = this.updateActive.bind(this);
	}

	render() {
		var statusType;
		var messageText;
		if (this.state.status === "error") {
			statusType = "error";
			messageText = "This is an error message."
		} else {
			statusType = "success";
			messageText = "It was successful."
		}

		return(
			<div>
				<div className="header-container">
				<Header />
				<HelloWorld />
				<Navigation activeLink={this.state.active} changeActiveLink={this.updateActive} />
				</div>
			</div>
		)

	}

	updateActive(link) {
		this.setState({active: link});
	}

}


ReactDOM.render(
	<App />,
	document.getElementById("react")
)








//
// function Product(name, price) {
// 	this.name = name;
// 	this.price = price;
//
// 	this.changePrice = function(newPrice) {
// 		this.price = newPrice;
// 	}
// }
//
// var boots = new Product("boots", 59.99);
//

// function newPrice(product, price) {
// 	product.changePrice(price);
// }

// function newPrice(updateMethod, price) {
// 	console.log(updateMethod);
// 	updateMethod(price);
// }
//
// newPrice(boots.changePrice, 129.99)

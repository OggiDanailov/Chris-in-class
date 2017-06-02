class HelloWorld extends React.Component {

	constructor() {
		super();
	}

	render() {
		return <div>Hello World!</div>
	}

}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById("react")
)

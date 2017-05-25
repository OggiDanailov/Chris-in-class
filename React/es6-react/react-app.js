class HelloWorld extends React.Component {

	constructor() {
		super();
	}

	render() {
		return <div>Hello World!</div>
	}

}

// ReactDOM.render(
	// <HelloWorld />,
// 	document.getElementById("react")
// )



class Message extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text,
			name: this.props.name
		}

		this.changeMessage = this.changeMessage.bind(this);

	}

	render() {
		return	<div>
					<div className="message">{this.state.text}</div>
					<input onChange={this.changeMessage} type="text" value={this.state.text} />
				</div>
	}

	changeMessage(event) {
		this.setState({text: event.target.value})
	}

}

ReactDOM.render(
	<Message text="Welcome to my Site." />,
	document.getElementById("react")
)

























//

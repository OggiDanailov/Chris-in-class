function Message(props) {
	return(
		<div className={props.messageType}>{props.text}</div>
	)
}

import React from 'react';
//import ErrorBoundary from './ErrorBoundary.js';

class FocusForm extends React.Component {
	constructor(props) {
		super(props);
		this.inputByUser = React.createRef();
	}
	render() {
		return (
			<React.Fragment>
			<div>
				<input type="text" ref={this.inputByUser} />
				<button onClick={this.handleClick}>Focus input</button>
			</div>
			</React.Fragment>
		);
	}
	handleClick = event => {
		console.log('FocusForm.handleClick: inputByUser is ', this.inputByUser);
		this.inputByUser.current.focus();
	}
}

export default FocusForm;

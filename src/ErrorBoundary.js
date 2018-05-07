import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	componentDidCatch(error, info) {
		this.setState({ hasError: true });
	}
	simulateError = () => {
		this.setState({hasError: true});
	}
	render() {
		if( this.state.hasError )
			return (<div>An error occurred</div>);
		else
			return (
				<React.Fragment>
				{this.props.children}
				<button onClick={this.simulateError}>Simulate error</button>
				</React.Fragment>
			);
	}
}

export default ErrorBoundary;

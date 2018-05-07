import React, { Component } from 'react';
import './App.css';
import FocusForm from './FocusForm.js';
import ErrorBoundary from './ErrorBoundary.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		  <FocusForm />
		  <FocusForm />
		  <FocusForm />
		  <FocusForm />
		  <ErrorBoundary>
			  <h3>inside error boundary</h3>
		  </ErrorBoundary>
      </div>
    );
  }
}

export default App;

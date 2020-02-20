import React, { Component } from 'react';
import './App.css';
import Callstack from './components/Callstack/Callstack';
import WebApi from './components/WebApi/WebApi';
import Console from './components/Console/Console';
import CallbackQueue from './components/CallbackQueue/CallbackQueue';
import Editor from './components/editor/Editor';
import queue from './components/CallbackQueue/queue';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Editor />
				<Callstack />
				<WebApi />
				<Console />
				<CallbackQueue queue={queue.head} />
			</React.Fragment>
		);
	}
}

export default App;

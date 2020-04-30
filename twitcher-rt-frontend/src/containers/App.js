import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router } from 'react-router-dom'; // BrowserRouter is client side router

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<Router>
			<div>Hello World!</div>
		</Router>
	</Provider>
);

export default App;
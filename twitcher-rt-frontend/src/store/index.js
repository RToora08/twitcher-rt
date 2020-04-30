import rootReducer from './reducers'; // ./reducers/index.js
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// createStore -
// applyMiddleware - useful for any kind of middleware; specifically thunk middleware
// compose - will allow to combine functions together
//           useful for second parameter of createStore
// thunk - allows to delay the evaluation of some expression,
//         is essential for working with async code in Redux

export function configureStore() {
	const store = createStore(
		rootReducer,
		compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (f) => f)
	);
	return store;
}

import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import App from './components/App';

ReactDom.render
	(
		<Provider store={createStore(rootReducer)}>
			<App />
		</Provider>
		, document.getElementById('root')
	)
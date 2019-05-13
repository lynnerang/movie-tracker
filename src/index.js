import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App.jsx';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

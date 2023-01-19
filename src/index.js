import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import './index.css';
import App from './components/App/App';


const pizzaList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PIZZALIST':
            return action.payload;
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        pizzaList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

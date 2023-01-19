import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// customer info reducer
const customerInfoList = (
  state=[
    {
      id: 1,
      customerName: 'Jeremy',
      streetAddress: '123 My House',
      city: 'Minneapolis',
      zip: '55555',
      type: 'delivery'
    }
  ], action
  ) => {
  if (action.type === 'ADD_CUSTOMER') {
    return action.payload;
  }
  return state;
}

// Redux store
const reduxStore = createStore(
  combineReducers({
    customerInfoList
  }),
  applyMiddleware(logger)
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root')
);

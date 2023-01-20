import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import './index.css';
import App from './components/App/App';


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

//cart reducer 
const cartList = (
  state=[
    {
      name: 'Bad Date',
      price: 24.99
    },
    {
      name: 'Tomato Soup',
      price: 12.99
    }
  ],action
) => {
  if (action.type === 'ADD_CART') {
    let newCartArray = [...state];
    newCartArray.push(action.payload.name);
    return newCartArray;
  }
  return state;
}

const pizzaList = (state = [], action) => {
  switch (action.type) {
      case 'SET_PIZZALIST':
          return action.payload;
      default:
          return state;
  }
}

// Redux store
const reduxStore = createStore(
  combineReducers({
    customerInfoList,
    pizzaList,
    cartList
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

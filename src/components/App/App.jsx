import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CustomerForm from '../CustomerForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home';


function App() {

  const pizzaList = useSelector(store => store.pizzaList);

  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      console.log('GET pizzaList response', response)
      dispatch({
        type: 'SET_PIZZALIST',
        payload: response.data
      })
    }).catch((error) => {
      console.error('GET Pizza error', error)
    })
  }, []);

  


  return (
    <Router>
      <div className='App'>
        <Home />
        
        <CustomerForm />

        <table className= "table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Add/Remove</th>
            </tr>
          </thead>
          <tbody>
          <>
          {pizzaList.map(pizza => (
            <tr key={pizza.id} className="active-row">
              <td><img src={pizza.image_path} height="150" width="175"></img></td>
              <td>{pizza.name}</td>
              <td>{pizza.description}</td>
              <td>${pizza.price}</td>
              <td><button>Add or Remove</button></td>
            </tr>
          ))}
          </>
          </tbody>
        </table>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/customerForm">
          <CustomerForm />
        </Route> */}
        {/* <Route exact path="/orderCheckout">
          <OrderCheckout />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
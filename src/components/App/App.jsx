import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import CustomerForm from '../CustomerForm';


function App() {

  const[pizzaName, setPizzaName] = useState ('')
  // const[pizzaCost, setPizzaCost] = useState ('')

  const pizzaData = {
    name: pizzaName,
    // cost: pizzaCost
  }

  const pizzaList = useSelector(store => store.pizzaList);
  const cartList = useSelector(store => store.cartList);
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

  const totalOrderPrice = () => {
    let total=0;
    let totalPrice=[];
    for (let price of totalPrice) {
      
    return total
    }
  }

  const createCart = (event) => {
    dispatch({
      type: 'ADD_CART',
      payload: pizzaData
    })
  } 

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza </h1>
        <h1 className='App-total-cost'>Total: {totalOrderPrice.total}$</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      
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
            <td><button onClick={setPizzaName(pizza.name)}>Add or Remove</button></td>
          </tr>
        ))}
        </>
        </tbody>
      </table>
          <div>
            {cartList.map((cartItem) => {
            return (
              <>
              <li>{cartItem.name}</li>
              </>
            )
            })}
          </div>
    </div>
  );
}

export default App;
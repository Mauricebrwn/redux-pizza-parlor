import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

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

  const totalOrderPrice = () => {
    let total=0;
    let totalPrice=[];
    for (let price of totalPrice) {
      
    return total
    }
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza </h1>
        <h1 className='App-total-cost'>Total: {totalOrderPrice.total}$</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
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
    </div>
  );
}

export default App;

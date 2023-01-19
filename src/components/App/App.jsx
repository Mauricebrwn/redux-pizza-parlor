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


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <ul>
            {pizzaList.map((pizza) => {
                return <li key={pizza.id}>{pizza.name}</li>
            })}
        </ul>
    </div>
  );
}

export default App;
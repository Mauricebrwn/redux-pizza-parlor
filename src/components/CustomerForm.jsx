import { useDispatch } from 'react-redux';
import { useState } from 'react';


function CustomerForm() {
  const [nameInput, setNameInput] = useState('');

  const dispatch = useDispatch();

  // submits customer form
  const submitCustInfo = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_CUSTOMER',
      payload: {
        name: nameInput
      }
    })
  }

  return (
    <>
      <h2>Step 2: Customer Information</h2>
      <form onSubmit={submitCustInfo}>
        <input 
          placeholder="Name"
          type="text"
          value={nameInput}
          onChange={(event) => setNameInput(event.target.value)}
        />
        <br/>
        <input placeholder="Street Address"/>
        <br/>
        <input placeholder="City"/>
        <br/>
        <input placeholder="Zip"/>
        <br/>
        <input id="pickupInput" value="pickup" type="radio"/><label htmlFor="pickupInput"> Pickup</label>
        <br/>
        <input id="deliveryInput" value="delivery" type="radio"/><label htmlFor="deliveryInput"> Delivery</label>
        <br/>
        <button>Next</button>
      </form>
    </>
  )
}


export default CustomerForm;
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function CustomerForm() {
  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [zipInput, setZipInput] = useState('');
  const [pickupInput, setPickupInput] = useState('');
  // const [deliveryInput, setDeliveryInput] = useState('');

  const dispatch = useDispatch();

  // submits customer form
  const submitCustInfo = (event) => {
    event.preventDefault();

    let newCustomer = {
      name: nameInput,
      address: addressInput,
      city: cityInput,
      zip: zipInput,
      type: pickupInput
    }

    dispatch({
      type: 'ADD_CUSTOMER',
      payload: newCustomer
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
        <input 
          placeholder="Street Address"
          type="text"
          value={addressInput}
          onChange={(event) => setAddressInput(event.target.value)}
        />
        <br/>
        <input 
          placeholder="City"
          type="text"
          value={cityInput}
          onChange={(event) => setCityInput(event.target.value)}
        />
        <br/>
        <input 
          placeholder="Zip"
          type="number"
          value={zipInput}
          onChange={(event) => setZipInput(event.target.value)}
        />
        <br/>
        <input 
          checked
          id="pickupInput" 
          value="pickup" 
          type="radio"
          name="type"
          onChange={(event) => setPickupInput(event.target.value)}
        /><label htmlFor="pickupInput"> Pickup</label>
        <br/>
        {/* <input 
          id="deliveryInput" 
          value="delivery" 
          type="radio"
          name="type"
          onChange={(event) => setDeliveryInput(event.target.value)}
        /><label htmlFor="deliveryInput"> Delivery</label> */}
        <br/>
        <button>Next</button>
      </form>
    </>
  )
}


export default CustomerForm;
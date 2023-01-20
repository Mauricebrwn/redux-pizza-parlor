import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

function OrderCheckout () {
    // const dispatch = useDispatch();
    // const customerList = useSelector(store => store.customerList);
    // const pizzaList = useSelector(store => store.pizzaList);

    const PostOrder = () => {
        axios({
            method: 'POST',
            url: '/api/order',
            data: 
                {
                    "customer_name": customerInfo.name,
                    "street_address": customerInfo.streetAddress,
                    "city": customerInfo.city,
                    "zip": customerInfo.zip,
                    "total":customerInfo.total,
                    "type": customerInfo.type,
                  }
        }).then((response) => {
            // INSERT NAME OF GET FUNCTION HERE!!!!!
        }).catch((error) => {
            console.log('Error in PostOrder: ', error);
        })
    }

    const PostPizza = () => {
        axios({
            method: 'POST',
            url: '/api/pizza',
            data: {
                "pizzas": [{
                    "id": pizzaInfo.id,
                    "quantity": "1"
                  }]
            }
        }).then((response) => {
            // INSERT GET FUNCTION
        }).catch((error) => {
            console.log('Error in PostPizza: ', error);
        })
    }


    return (
        <>
        <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
        </header>

        <div>
            <h2>Step 3: Checkout</h2>
            <li>{customerInfo.name}</li>
            <li>{customerInfo.streetAddress}</li>
            <li>{customerInfo.city}, {customerInfo.zip}</li>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Cost
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaInfo.map((pizza) => {
                        return (
                            <tr>
                                <td>{pizza.name}</td>
                                <td>{pizza.cost}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={PostOrder}>Checkout???</button>
        </div>
        </>
    )
}

export default OrderCheckout;
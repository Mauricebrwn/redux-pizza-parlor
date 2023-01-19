import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'

function AdminList () {
    const adminList = useSelector(store => store.adminList);
    const dispatch = useDispatch();

    useEffect(() => {
        axios({
        method: 'GET',
        url: '/orders'
        }).then((response) => {
            dispatch({
            type: 'SET_ORDER_LIST',
            payload: response.data
            })
        }).catch((err) => {
            console.error('adminItem useEffect fail:', err)
        })
    },[])
return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            {adminList.map((order) => {
                return <AdminItem key={order.id} order={order}/>
            })}
        </tr>
        </tbody>
    </table>
)

}

export default AdminList;


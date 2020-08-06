import React, { useContext } from 'react'
import { todoContext } from '../App'
import OrderDetails from "./OrderDetails"

const OrderList=()=> {

    const {orders}=useContext(todoContext)
    return (
        <div className="list">
            <h4>Welcome to The Menu Order</h4>
            <p>Currently, You Have {orders.length} orders in your Cart!!!</p>
            <ul>
                {
                    orders.map(order=>{
                        return(
                            <OrderDetails key={order.id} ord={order}/>
                        )
                    })
                }
            </ul>
            
        </div>
    )
}

export default OrderList

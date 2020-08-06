import React,{useState, useContext} from 'react'
import { todoContext } from '../App'

const OrderForm=()=> {

    const {dispatch}=useContext(todoContext)
    const [order,setOrder]=useState("")
    const [customer,setCustomer]=useState("")



    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:"ADD_ORDER",book:{order,customer}})
        setCustomer("")
        setOrder("")

    }
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
           
                Order Name:
                <input type="text" placeholder="Enter the Order Name" value={order}
                onChange={e=>setOrder(e.target.value)} required/>

                Customer Name:
            <input type="text" placeholder="Enter the Customer Name" value={customer}
            onChange={e=>setCustomer(e.target.value)} required/>
           
            <button type="submit">Add Order</button>
            </form>
        </div>
    )
}

export default OrderForm

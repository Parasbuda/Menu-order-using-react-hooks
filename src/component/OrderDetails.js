import React,{useContext} from 'react'
import { todoContext } from '../App'

const OrderDetails=({ord})=> {
    const {dispatch}=useContext(todoContext)
    return (
        <li onClick={()=>dispatch({type:"REMOVE_ORDER",id:ord.id})} className="item">
            <div>{ord.order}</div>
            <div>{ord.customer}</div>
        </li>
    )
}

export default OrderDetails

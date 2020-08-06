import React,{useReducer,useEffect} from 'react';
import uuid from "uuid"
import OrderForm from './component/OrderForm';
import OrderList from './component/OrderList';
export const todoContext=React.createContext()




const reducer=(state,action)=>{
  switch(action.type){
    case "ADD_ORDER":
      return([...state,{order:action.book.order,customer:action.book.customer,id:uuid()}])

      
      case "REMOVE_ORDER":
         return (state.filter(ord=>{
           return( ord.id!==action.id)}))
         
        default:
          return state
  }
}


const App=()=> {
 
const [ orders,dispatch]=useReducer(reducer,[],()=>{
  const localData=localStorage.getItem("orders")
  return(localData?JSON.parse(localData):[])
})

useEffect(()=>{
  localStorage.setItem("orders",JSON.stringify(orders))
},[orders])
  return (
    <todoContext.Provider value={{orders,dispatch}}>
    <div >
      <OrderForm/>
      <OrderList/>
      
    </div>
    </todoContext.Provider>
  );
}

export default App;

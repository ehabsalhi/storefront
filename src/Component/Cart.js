import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { Remove_From_Cart, add_To_Cart, put } from '../Store/Reducer'

function Cart(props) {
     const dispatch = useDispatch()
     console.log(props);
  return (
    <div className='cart-contaner'>
     <div className="count">CART ( {props.CartReducer.count} )</div>
     {
          props.CartReducer.cartProducts.map((ele , i) =>{
             return  <div className="cart" key={i}>
                  <p>{ele.name}</p>
                  <p>
                       <button className='in' onClick={() => { dispatch(add_To_Cart(ele, 'de'));  dispatch(put(ele , 'de'));}} disabled={ele.quantity === 0}>-</button>
                       {ele.quantity}
                       <button className='in' onClick={() => {dispatch(add_To_Cart(ele , 'in')) ; dispatch(put(ele , 'in'));}}>+</button>
                  </p>
                  <button onClick={()=> props.Remove_From_Cart(ele)}>X</button>
               </div>

          })
     }
    </div>
  )
}

const cartProps = state => {
     return {
          CartReducer : state.CartReducer
     }
}
const dispatch = {Remove_From_Cart , add_To_Cart}

export default connect(cartProps , dispatch )(Cart)

import React from 'react'
import { connect } from 'react-redux'
import { Remove_From_Cart } from '../Store/Reducer'

function Cart(props) {
  return (
    <div className='cart-contaner'>
     <div className="count">CART ( {props.CartReducer.count} )</div>
     {
          props.CartReducer.cartProducts.map((ele , i) =>{
             return  <div className="cart" key={i}>
                  <p>{ele.name}</p>
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
const dispatch = {Remove_From_Cart}

export default connect(cartProps , dispatch )(Cart)

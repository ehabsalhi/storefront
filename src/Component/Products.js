import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { add_To_Cart, put } from '../Store/Reducer'
import axios from 'axios';


function Products(props) {
     let data = props.CategoriesReducer.active.data
     const dispatch = useDispatch()

  return (
    <div className='cards'>
          <h2>Category : {props.CategoriesReducer.active.name}</h2>
            <div className="all-cards">   
          {
               data?.map((ele,i) => 
               <div key={i} className='card'>
                    <h3>{ele.name}</h3>
                    <p>in Stock : {ele.inStock}</p>
                    <p>Price : {ele.price}</p>
                         <button onClick={() => { props.add_To_Cart(ele , 'in'); dispatch(put(ele , 'in')); }}>Add To Cart</button>     
               </div>)
          }
            </div>
    </div>
  )
}

const propsRedux = (state) => {
     return {CategoriesReducer : state.CategoriesReducer}
}

const dispatch = {add_To_Cart}

export default connect(propsRedux , dispatch)(Products)

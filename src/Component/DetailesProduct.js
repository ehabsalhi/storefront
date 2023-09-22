import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_Cart } from '../Store/Reducer';
import Cart from './Cart';

export default function Detailes() {
  const data = useSelector(state => state.CartSlicer.detiales)
  const dispatch = useDispatch()
  console.log(data);
  return (
  <>
      <Cart/>
    <div className="detiales-cont">
    <div className='detailes-cards'>
        <h3>{data.name}</h3>
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU" alt="" />
            <div className='price'>  
              <p>in Stock : {data.inStock}</p>
              <p>Price : {data.price}</p>     
            </div>
        </div>
        <button onClick={() => {dispatch(Add_Cart({ ...data, status: 'in' }, 'in'))}}>BUY</button>
      </div>
      </div>
 </>


  )
}

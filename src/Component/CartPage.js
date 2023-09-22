import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function CartPage() {
     const data = useSelector(state => state.CartSlicer.cartProducts)
     let [total, setTotal] = useState(0.00)

     useEffect(() => {
          let calculatedTotal = 0.00;
          data.forEach(ele => {
            calculatedTotal += ele.price * ele.quantity;
          });
          setTotal(`$${calculatedTotal}`);
        }, [data]);
     
  return (
    <div className='cartMain'>
      <div className='cartCont'>
          <p className='summary'>Order summary</p>
          {
               data.map((ele,i) => {
                    return (
                    <div key={i} className='item-cart'>
                         <p>Name : {ele.name}</p>
                         <p>Quantity : {ele.quantity}</p>
                         <p>Price : {ele.price}</p>
                    </div>
                    )
               })
          }
          <div className='total'>
               <p>Total</p>
               <p>{total}</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your purchase')}} >
               <div className="input">
                    <div className="Address">
                         <p>Billing Address</p>
                         <input type="text" placeholder='Full Name' />
                         <input type="text" placeholder='Address' />
                         <input type="text" placeholder='City' />
                         <input type="text" placeholder='State' />
                         <input type="text" placeholder='zip' />
                    </div>
                    <div className="Payment">
                         <p>Payment details</p>
                         <input type="text" placeholder='Credit Card #' />
                         <input type="text" placeholder='Expiration Y/M/D' />
                         <input type="text" placeholder='CVV' />
                    </div>
               </div>
               <div className="btn">
                    <button type='submit'>PLACE YOUR ORDER</button>
               </div>
          </form>
      </div>
    </div>
  )
}

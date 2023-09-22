import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add_Cart, Add_to_detiales, put } from '../Store/Reducer'
import { Link } from 'react-router-dom'


function Products() {
     const dispatch = useDispatch()
     const data = useSelector((state) => state.CategoriesSlicer)

  return (
    <div className='cards'>
          <h2>Category : {data.active.name}</h2>
            <div className="all-cards">
          {
               data.active.data.map((ele,i) => 
               <div key={i} className='card'>
                    <h3>{ele.name}</h3>
                    <p>in Stock : {ele.inStock}</p>
                    <p>Price : {ele.price}</p>
                         <button onClick={() => {
                              dispatch(Add_Cart({ ...ele, status: 'in' }, 'in'));
                              dispatch(put({ ...ele, status: 'in' }, 'in'));
                         }}>Add To Cart</button>  
                         <Link to='detailes' onClick={() => {dispatch(Add_to_detiales(ele));}}>
                          <button >More Details</button>     
                         </Link>
               </div>)
          }
            </div>
    </div>
  )
}


export default Products



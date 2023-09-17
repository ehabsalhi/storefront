import React from 'react'
import { connect } from 'react-redux'
import { activate } from '../Store/Reducer';
import Products from './Products';
import Cart from './Cart';

function Category(props) {
      
     return (
          <div className='mid-page'>
          <Cart/>
          <section>
                    <div className='text'>Browse our Categories</div>
                    <div className="categories">
                    {
                    props.CategoriesReducer.categories.map((ele , i) =>{
                         return <p  onClick={() => props.activate(ele)} key={i}>{ele}</p>
                    })
                    }
                    </div>
                    <Products />
          </section>
          </div>
  )
}

const propsRedux = (state) => {
     return  {CategoriesReducer : state.CategoriesReducer}
}

const mapDispatchProps = { activate }

export default connect(propsRedux , mapDispatchProps)(Category)
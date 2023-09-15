import React from 'react'
import { connect } from 'react-redux'

function Products(props) {
     let data = props.CategoriesReducer.active.data
  return (
    <div className='cards'>
          <h2>Category : {props.CategoriesReducer.active.name}</h2>
            <div className="all-cards">
                 
          {
               data.map((ele,i) => 
               <div key={i} className='card'>
                    <h3>{ele.name}</h3>
                    <p>{ele.description}</p>
                    <p>{ele.price}</p>            
               </div>)
          }
            </div>
    </div>
  )
}

const propsRedux = (state) => {
     return {CategoriesReducer : state.CategoriesReducer}
}

export default connect(propsRedux)(Products)

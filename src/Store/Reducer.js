import axios from "axios"

const initialState = {
     categories: ['electronics', 'games', 'food' , 'office' , 'clothes' , 'weapons'],
     active: {name : '' , data : []},
     // products: [
     //      {
     //      name: 'Pizza',
     //      description: 'yame Pizza',
     //      price: '25$',
     //      category : 'FOOD'
     //      },
     //      {
     //      name: 'Cookies',
     //      description: 'yame Cookies',
     //      price: '5$',
     //      category : 'FOOD'
     //      },
     //      {
     //      name: 'Banana',
     //      description: 'frech Banana',
     //      price: '25$',
     //      category : 'FOOD'
     //      },
     //      {
     //      name: 'camera',
     //      description: '',
     //      price: '225$',
     //      category : 'ELECTRONICS'
     //      },
     //      {
     //      name: 'iPad',
     //      description: '',
     //      price: '550$',
     //      category : 'ELECTRONICS'
     //      },
     //      {
     //      name: 'TV',
     //      description: '',
     //      price: '235$',
     //      category : 'ELECTRONICS'
     //      },
     //      {
     //      name: 'Monopoly',
     //      description: '',
     //      price: '50$',
     //      category : "GAMES"
     //      },
     //      {
     //      name: 'Smash Bros',
     //      description: '',
     //      price: '35$',
     //      category : "GAMES"
     //      },
     
     // ]
}



export const  CategoriesReducer =  (state = initialState, actions) => {
     const { type, payload } = actions

     switch (type) {
          case 'activate':
               const filter = state.products?.filter(ele => ele.category === payload)
               state.active.name = payload
               state.active.data = filter
               return { ...state }
          case 'GET':
               // console.log(state);
               return { ...state, products: payload }
          case "PUT":
               const filterStock = state.products.map(ele => ele._id === payload._id ? payload : ele)
               return{...state , products : filterStock}
          default:
               return state
     }
}


export const activate = (name) => {
     return {
          type: 'activate',
          payload : name
     }
}

export const get = () => async (dispatch) => {
     let res = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
     dispatch(getDispatch(res.data.results))
}

export const getDispatch = (data) => {
     return {
          type: "GET",
          payload : data
     }
}

export const put = (ele ,stockState) => async dispatch => {
     let obj = {
          category: ele.category,
          inStock: stockState === 'in' ? ele.inStock-- : ele.inStock++ ,
          name: ele.name,
          price: ele.price,
          __v: ele.__v,
          _id: ele._id
     }
     let res = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${ele._id}`, obj)
     // console.log(res.data);
     dispatch(putDispatch(res.data))
}

export const putDispatch = (data) => {
     return {
          type: 'PUT',
          payload : data
     }
}

export const CartReducer = (state = {cartProducts : [] , count : 0  , checkers : []}, action) => {
     const { type, payload, stockState } = action
     switch (type) {
          case 'Add_To_Cart':
               if (state.checkers.includes(payload.name)) {
                    let filterQuantity = state.cartProducts.map(ele => {
                         if (ele.name === payload.name) {
                              console.log(stockState , 'stockState');
                              payload.stockState === 'in' ?  ele.quantity++ :  ele.quantity--
                              return ele
                         }
                         return ele 
                    })
                    return {...state ,cartProducts :filterQuantity }
               }
               payload.quantity = 1
               return { cartProducts: [...state.cartProducts, payload], count: state.count + 1, checkers: [...state.checkers, payload.name] }
          case 'Remove_From_Cart':
               const filterCart = state.cartProducts.filter(ele => ele.name !== payload.name)
               const filterCheckers = state.checkers.filter(ele => ele !== payload.name)
               return { cartProducts :filterCart , checkers : filterCheckers  , count : state.count - 1}
               
               
               
          default:
               return state
     }
     
}

export const add_To_Cart = (products, state) => {
     state === 'in' ? products.stockState = 'in' : products.stockState = 'de'
     return {
          type: 'Add_To_Cart',
          payload: products,
     }
}

export const Remove_From_Cart = (ele) => {
     return {
          type: 'Remove_From_Cart',
          payload : ele
     }
}

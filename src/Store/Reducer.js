const initialState = {
     categories: ['ELECTRONICS', 'GAMES', 'FOOD'],
     active: {name : '' , data : []},
     products: [
          {
          name: 'Pizza',
          description: 'yame Pizza',
          price: '25$',
          category : 'FOOD'
          },
          {
          name: 'Cookies',
          description: 'yame Cookies',
          price: '5$',
          category : 'FOOD'
          },
          {
          name: 'Banana',
          description: 'frech Banana',
          price: '25$',
          category : 'FOOD'
          },
          {
          name: 'camera',
          description: '',
          price: '225$',
          category : 'ELECTRONICS'
          },
          {
          name: 'iPad',
          description: '',
          price: '550$',
          category : 'ELECTRONICS'
          },
          {
          name: 'TV',
          description: '',
          price: '235$',
          category : 'ELECTRONICS'
          },
          {
          name: 'Monopoly',
          description: '',
          price: '50$',
          category : "GAMES"
          },
          {
          name: 'Smash Bros',
          description: '',
          price: '35$',
          category : "GAMES"
          },
     
     ]
}



export const  CategoriesReducer =  (state = initialState, actions) => {
     const { type, payload } = actions

     switch (type) {
          case 'activate':
               const filter = state.products.filter(ele => ele.category === payload)
               state.active.name = payload
               state.active.data = filter
               return {...state }
          default:
               return state
     }
}



export const CartReducer = (state = {cartProducts : [] , count : 0  , checkers : []}, action) => {
     const { type, payload } = action
     switch (type) {
          case 'Add_To_Cart':
               if (state.checkers.includes(payload.name)) {
                    console.log(state.checkers);
                    return state
               }
               return { cartProducts: [...state.cartProducts, payload], count: state.count + 1, checkers: [...state.checkers, payload.name] }
          case 'Remove_From_Cart':
               const filterCart = state.cartProducts.filter(ele => ele.name !== payload.name)
               const filterCheckers = state.checkers.filter(ele => ele !== payload.name)
               return { cartProducts :filterCart , checkers : filterCheckers  , count : state.count - 1}
               
               
               
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


export const add_To_Cart = (products) => {
     return {
          type: 'Add_To_Cart',
          payload : products
     }
}

export const Remove_From_Cart = (ele) => {
     return {
          type: 'Remove_From_Cart',
          payload : ele
     }
}

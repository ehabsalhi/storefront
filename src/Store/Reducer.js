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

export const activate = (name) => {
     return {
          type: 'activate',
          payload : name
     }
}

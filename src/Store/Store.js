import { applyMiddleware, combineReducers, createStore } from "redux";
import { CategoriesReducer  , CartReducer, CategoriesSlicer, CartSlicer} from "./Reducer";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";


const Reducers = combineReducers({ CategoriesSlicer, CartSlicer })
// const Reducers = combineReducers({ CategoriesReducer, CartReducer })

const Store = configureStore({
     reducer: Reducers
})



export default Store
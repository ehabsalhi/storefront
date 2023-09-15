import { combineReducers, createStore } from "redux";
import { CategoriesReducer } from "./Reducer";

const Reducers = combineReducers({CategoriesReducer})

const Store = createStore(Reducers)

export default Store
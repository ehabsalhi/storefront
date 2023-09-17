import { combineReducers, createStore } from "redux";
import { CategoriesReducer  , CartReducer} from "./Reducer";

const Reducers = combineReducers({CategoriesReducer , CartReducer})

const Store = createStore(Reducers)


export default Store
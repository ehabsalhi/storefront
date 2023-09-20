import { applyMiddleware, combineReducers, createStore } from "redux";
import { CategoriesReducer  , CartReducer} from "./Reducer";
import thunk from "redux-thunk";

const Reducers = combineReducers({CategoriesReducer , CartReducer})

const Store = createStore(Reducers , applyMiddleware(thunk))


export default Store
import { combineReducers, createStore } from "redux";
import  ProductReducer  from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";


const RootReducer = combineReducers ({
    ProductReducer,
    CartReducer,
    
})

export const store = createStore(RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers } from './reducers/productReducers'
import { subcategoryListReducers } from './reducers/subcategoryReducers'
const reducer = combineReducers({
    productList: productListReducers,
    subcategoryList:subcategoryListReducers,
    
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)) )

export default store;
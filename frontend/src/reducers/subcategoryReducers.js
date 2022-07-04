import {
    SUBCATEGORY_LIST_REQUEST,
    SUBCATEGORY_LIST_SUCCESS,
    SUBCATEGORY_LIST_FAIL, } from '../constants/subcategoryConstants'

export const subcategoryListReducers = (state = {products:[]}, action) => {

    switch(action.type){
        case SUBCATEGORY_LIST_REQUEST:
            return {loading:true, products:[]}
        case SUBCATEGORY_LIST_SUCCESS:
            return {loading:false, products:action.payload}
        case SUBCATEGORY_LIST_FAIL:
            return {loading:false,error: action.payload}
        default:
            return state
    }

}
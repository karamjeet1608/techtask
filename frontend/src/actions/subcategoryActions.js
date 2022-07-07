import axios from 'axios';
import { SUBCATEGORY_LIST_REQUEST,
        SUBCATEGORY_LIST_SUCCESS,
        SUBCATEGORY_LIST_FAIL,} from '../constants/subcategoryConstants'

export const listSubcategories = (id) => async (dispatch) => {
    try {
        dispatch({ type:SUBCATEGORY_LIST_REQUEST, })
        const { data } = await axios.get(`http://127.0.0.1:8000/subcategorybyproductid/${id}`)
        console.log(data)
        dispatch({
            type:SUBCATEGORY_LIST_SUCCESS,
            payload:data
        })
        console.log("Dispatch success")

    }
    catch (error){
        dispatch({ 
            type:SUBCATEGORY_LIST_FAIL,
            payload:error.response && error.response.data ?error.response.data:error.message})

    }

}
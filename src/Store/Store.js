import {configureStore} from '@reduxjs/toolkit'

import cartReducer from  '../Slice/CartSlice'

 export const Store =configureStore({
    reducer:{
        cart:cartReducer,
    }
 })
import { createSlice } from "@reduxjs/toolkit";
import CartItem from "../Details/CartItem";
const initialState={
CartItem:CartItem,
amount:0,
total:0,
isLoading:true
}

const cartSlice=createSlice({
    name:'cart',
    initialState
})


//console.log(cartSlice);

export default cartSlice.reducer
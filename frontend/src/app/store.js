import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productSlice'
import cartReducer from "../features/cart/cartSlice"
import userReducer from "../features/user/userSlice"

export const store = configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer,
        user: userReducer,
    }
})
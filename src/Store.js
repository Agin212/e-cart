import {configureStore} from "@reduxjs/toolkit";
import ProductsReducer from "./Productslice";
import cartReducer from "./cartSlice";


const store = configureStore({
    reducer:{
        products: ProductsReducer,
        cart: cartReducer,
    },
});

export default store;
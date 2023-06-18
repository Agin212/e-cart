import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Productslice";
import cartReducer from "./cartSlice";

// store configuration
const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: cartReducer,
    },
});

export default store;
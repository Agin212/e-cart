import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartItems : localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item)=> item.id === action.payload.id
            );
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("CART QUANTITY UPDATED" , {
                    position:"bottom-center"
                })
            }else{
                const temProducts = { ...action.payload, cartQuantity: 1};
                state.cartItems.push(temProducts);
                toast.success('PRODUCT ADDED TO CART' , {
                    position:"bottom-center"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
            const newCartItems = state.cartItems.filter(
                (newItem)=> newItem.id !== action.payload.id);
    
                state.cartItems = newCartItems;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.error('PRODUCT REMOVED FROM CART' , {
                    position:"bottom-center"
                })
        },
        clearCart(state , action){
            state.cartItems =[];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.info('CART CLEARED' , {
                    position:"bottom-center"
                })
        },
        decreaseCart(state ,action){
            const itemIndex = state.cartItems.findIndex(
                (item)=> item.id === action.payload.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
            else if(state.cartItems[itemIndex].cartQuantity===1){
                const newCartItems = state.cartItems.filter(
                    (newItem)=> newItem.id !== action.payload.id);
                    state.cartItems = newCartItems;


            }

        },
        increaseCart(state, action){
            const itemIndex = state.cartItems.findIndex(
                (item)=> item.id === action.payload.id);

                state.cartItems[itemIndex].cartQuantity+=1;

        },
        getTotals(state,action){
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem)=>{
                    const {price,cartQuantity} = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total:0,
                    quantity:0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    },
   

});

export const {addToCart} = cartSlice.actions;
export const {clearCart , removeFromCart ,decreaseCart , increaseCart, getTotals} = cartSlice.actions

export default cartSlice.reducer;
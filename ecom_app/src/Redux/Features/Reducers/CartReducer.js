import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "../counterSlice";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],
    },
    reducers:{
        addTocart:(state,action)=>{
            const itemPreset=state.cart.find((item)=>item.id===action.payload.id);
            if(itemPreset){
                itemPreset.quantity++;
            }else{
                state.cart.push({...action.payload,quantity:1});
            }
        },
        removeFromCart:(state,action)=>{

            const removeFromCart=state.cart.filter((item)=>item.id !== action.payload.id);
            state.cart=removeFromCart;
        },
        incrementQuantity:(state,action)=>{
            const itemPreset=state.cart.find((item)=>item.id===action.payload.id);
            itemPreset.quantity++;
        },
        decrementQuantity:(state,action)=>{
            const itemPreset=state.cart.find((item)=>item.id===action.payload.id);
            if(itemPreset.quantity==1){
                const removeFromCart=state.cart.filter((item)=>item.id !==action.payload.id);
                state.cart=removeFromCart;
            }else{
                itemPreset.quantity--;
            }
        }
    }
})

export const {addTocart,removeFromCart,incrementQuantity,decrementQuantity}=cartSlice.actions
export default cartSlice.reducer;
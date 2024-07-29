import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Features/counterSlice'
import CartReducer from './Features/Reducers/CartReducer'
import ProductReducer from './Features/Reducers/ProductReducer'
import AuthSlice from './Features/Reducers/AuthSlice'

export const store = configureStore({
  reducer: {
    cart:CartReducer,
    product:ProductReducer,
    counter:counterSlice ,
    auth:AuthSlice,
  },
})
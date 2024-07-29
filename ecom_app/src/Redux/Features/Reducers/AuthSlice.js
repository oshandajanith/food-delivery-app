import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../api";
import { State } from "react-native-gesture-handler";

const initialState={
    userData:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
};

export const login=createAsyncThunk('login',async(params,thunkApi)=>{
    console.log(params)
    try{
        const response=await API.post('auth/login',params);
        console.log(response)
        return response.data
    }catch(error){
        console.log(error)
        return thunkApi.rejectWithValue(error)
    }
    
})

const AuthSlice=createSlice({
    name:'authSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(State)=>{
            State.isLoading=true;

        })
        builder.addCase(login.fulfilled,(State,action)=>{
            State.isLoading=false;
            State.isSuccess=true;
            State.userData=action.payload;
        })
        builder.addCase(login.rejected,(State,action)=>{
            State.isLoading=false;
            State.isError=true;
        })

    }
})

export default AuthSlice.reducer;
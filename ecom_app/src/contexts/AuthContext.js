import { createContext, useReducer } from "react";
import React from "react";
import { SignInReducer } from "../reducers/AuthReducers";

export const SignInContex=createContext()

 export const SignInContexProvider=(props)=>{
    const[signedIn,dispatchSignedIn]=useReducer(SignInReducer,{
        userToken:null
    })
    return(
        <SignInContex.Provider value={{signedIn,dispatchSignedIn}}>
            {props.children}

        </SignInContex.Provider>
    )
}




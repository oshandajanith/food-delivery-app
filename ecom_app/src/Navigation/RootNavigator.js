import React,{useContext} from "react";
import { NavigationContainer} from "@react-navigation/native";
import AuthStack from "./authNavigators";
import AppStack from "./AppStack";
import { SignInContex } from "../contexts/AuthContext";

export default function RootNavigator(){
    const{signedIn}=useContext(SignInContex)
    return(
        <NavigationContainer>
            {signedIn.userToken === null ? <AuthStack/>:<AppStack/>}
        </NavigationContainer>

    )
}

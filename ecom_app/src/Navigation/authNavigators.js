import React from "react";
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import SignInWelcomeScreen from "../screens/authScreen/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreen/SignInScreen";
import HomeScreen from "../screens/authScreen/HomeScreen";
import RootClientTabs from "./ClientTab";

import SignUpScreen from "../screens/authScreen/SignUpScreen";
import SplashScreen from "../screens/SplashScreen";
import PaymentDone from "../screens/authScreen/PaymentDone";

const Auth=createStackNavigator();

export default function AuthStack(){
    return(


        <Auth.Navigator>

                <Auth.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            
            <Auth.Screen
            name="PaymentDone"
            component={PaymentDone}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />

            <Auth.Screen
                name="SignInWelcomeScreen"
                component={SignInWelcomeScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

          
        </Auth.Navigator>
    

        

    )
}
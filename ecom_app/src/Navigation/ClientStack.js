import React,{useLayoutEffect} from "react";
import { StyleSheet,View,Text } from "react-native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import SearchScreen from "../screens/authScreen/SearchScreen";
import SearchResultScreen from "../screens/authScreen/SearchResultScreen";
import RestaurentHomeScreen from "../screens/authScreen/RestaurentHomeScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MenuProductScreen from "../screens/authScreen/MenuProductScreen";
import PreferenceScreen from "../screens/authScreen/PreferenceScreen";
import PaymentScreen from "../screens/authScreen/PaymentScreen"
import PaymentDone from "../screens/authScreen/PaymentDone";



const ClientSearch=createStackNavigator()

export  function ClientStack({navigation,route}){
    useLayoutEffect(()=>{
        const routeName=getFocusedRouteNameFromRoute(route);
        if(routeName==="RestaurentHomeScreen"||"MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
    },[navigation,route])
    return(
        <ClientSearch.Navigator>

            <ClientSearch.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />


            
            <ClientSearch.Screen
                name="RestaurentHomeScreen"
                component={RestaurentHomeScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />

              
        <ClientSearch.Screen
                name="MenuProductScreen"
                component={MenuProductScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen
                name="PreferenceScreen"
                component={PreferenceScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />

            <ClientSearch.Screen
                name="PaymentDone"
                component={PaymentDone}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
            />

        

        </ClientSearch.Navigator>
    )
}

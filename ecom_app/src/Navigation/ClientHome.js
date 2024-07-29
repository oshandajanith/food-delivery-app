import React,{useLayoutEffect} from "react";
import { StyleSheet,View,Text } from "react-native";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "../screens/authScreen/HomeScreen";
import RestaurentHomeScreen from "../screens/authScreen/RestaurentHomeScreen";

const ClientHome=createStackNavigator()
export  function ClientHome({navigation,route}){
    useLayoutEffect(()=>{
        const routeName=getFocusedRouteNameFromRoute(route);
        if(routeName==="RestaurentHomeScreen"||"MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
    },[navigation,route])
    return(
        <ClientHome.Navigator>
            <ClientHome.Screen
            
            name="HomeScreen"
            component={HomeScreen}
            options={
                ()=>({
                    headerShown:false
                })
            }
            />

<ClientHome.Screen
            
            name="RestaurentHomeScreen"
                component={RestaurentHomeScreen}
                options={
                    ()=>({
                        headerShown:false
                    })
                }
                />

            

        </ClientHome.Navigator>
    )
}

    
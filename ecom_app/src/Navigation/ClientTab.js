import React from "react";
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from "react-native-elements";
import { colors } from "../global/Styles";
import HomeScreen from "../screens/authScreen/HomeScreen";
import MyOderScreen from "../screens/authScreen/MyOdersScreen";
import MyAccountScreen from "../screens/authScreen/MyAccountScreen";
import { ClientStack } from "./ClientStack";


const ClientTabs=createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <ClientTabs.Navigator
            tabBarOption={{
                activeTintColor:colors.buttons
                
            }}
            screenOptions={{headerShown:false}}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel:"Home",
                        tabBarIcon:({color,size})=>(
                           <Icon
                                name="home"
                                type="material"
                                color={color}
                                size={size}
                           />
                        )

                    }
                }
            />

<ClientTabs.Screen
                name="SearchScreen"
                component={ClientStack}
                options={
                    {
                        tabBarLabel:"Search",
                        tabBarIcon:({color,size})=>(
                           <Icon
                                name="search"
                                type="material"
                                color={color}
                                size={size}
                           />
                        )

                    }
                }
            />


<ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel:"My Account",
                        tabBarIcon:({color,size})=>(
                           <Icon
                                name="person"
                                type="material"
                                color={color}
                                size={size}
                           />
                        )

                    }
                }
            />

            

        </ClientTabs.Navigator>
    )
}
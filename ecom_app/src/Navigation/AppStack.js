import React from "react";
import {createStackNavigator,TransitionPresets} from '@react-navigation/stack'
import RestaurentMapScreen from "../screens/authScreen/RestaurentMapScreen";
import DrawerNavigator from "./DrawerNavigator"
import { useSelector } from "react-redux";

const App=createStackNavigator();


export default function AppStack(){
return(
    <App.Navigator>
<App.Screen
name="App"
component={DrawerNavigator}
options={{
    headerShown:false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>

<App.Screen
name="RestaurentMapScreen"
component={RestaurentMapScreen}
options={{
    headerShown:false,
    ...TransitionPresets.RevealFromBottomAndroid
}}
/>
</App.Navigator>

)
}
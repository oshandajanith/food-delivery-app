import * as React from "react";
import {createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./ClientTab";
import { Icon } from "react-native-elements";
import { colors } from "../global/Styles";
import BusinessConsoleScreen from "../screens/authScreen/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";


const Drawer =createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
            drawerContent={props=><DrawerContent {...props}/>}

        >
           
            
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                
                
                
                options={{
                    title:'Client',
                    headerShown:false,
                    
                    drawerIcon:({focussed,size})=>(

                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed? '#7cc':colors.grey2}
                            size={size}

                        />
                    )
                }}
                
                
            
            />

            <Drawer.Screen
                name="Business ConsoleScreen"
                component={BusinessConsoleScreen}
                
                
                
                options={{
                    title:'Business console',
                    headerShown:false,
                    
                    drawerIcon:({focussed,size})=>(

                        <Icon
                            type="material"
                            name="business"
                            color={focussed? '#7cc':colors.grey2}
                            size={size}

                        />
                    )
                }}
                
                
            
            />




        </Drawer.Navigator>
    )
}
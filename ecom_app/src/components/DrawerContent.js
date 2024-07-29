import React,{useState,useContext,useEffect} from "react";
import { View,Text,Linking,Pressable,Alert,Switch, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView,DrawerItemList,DrawerItem } from "@react-navigation/drawer";
import { Avatar,Button,Icon } from "react-native-elements";
import { colors } from "../global/Styles";
import Auth from '@react-native-firebase/auth'
import { SignInContex } from "../contexts/AuthContext";



export default function DrawerContent(props){
    const {dispatchSignedIn}=useContext(SignInContex)
    async function signOut(){
       
        try{
            Auth()
            .signOut()
            .then(
                ()=>{
                    console.log("USER SUCCESSFULLY SIGNED OUT")
                    dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:null}})
                }
            )

        }catch(err){
            Alert.alert(err.code)
        }
    }
    return(
        <View style={Styles.container}>
            <DrawerContentScrollView {...props}>
            <View style={{backgroundColor:colors.buttons}}>
             <View style={{flexDirection:"row",alignItems:"center",paddingLeft:20,paddingVertical:10}}>
                <Avatar
                    rounded
                    avatarStyle={Styles.avatar}
                    size={75}
                    source={{uri:"https://firebasestorage.googleapis.com/v0/b/e-com-app-ffe74.appspot.com/o/images%20(3).jpg?alt=media&token=98992929-3e2b-4237-9370-7a9df3e33b7d"}}
                />
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:"bold",color:colors.cardbackground,fontSize:18}}>oshanda janith</Text>
                <Text style={{color:colors.cardbackground,fontSize:14}}>oshanda26@gmail.com</Text>
            </View>

           

            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingBottom:5}}>
            <View style={{flexDirection:"row",marginTop:0}}>
                <View style={{marginLeft:10,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontWeight:"bold",color:colors.cardbackground,fontSize:18}}>1</Text>
                    <Text style={{color:colors.cardbackground,fontSize:14}}>My Favorite</Text>

                </View>
            </View>

            <View style={{flexDirection:"row",marginTop:10,}}>
            <View style={{marginLeft:10,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontWeight:"bold",color:colors.cardbackground,fontSize:18}}>0</Text>
                    <Text style={{color:colors.cardbackground,fontSize:14}}>My Cart</Text>

                </View>
            </View>

            </View>

        </View>
           
          
            <DrawerItemList {...props} />

            <DrawerItem
            
            label="payment"
            icon={({color,size})=>(
                <Icon
                    type="material-community"
                    name="credit-card-outline"

                    color={color}
                    size={size}

                />
            )}


        />


          <DrawerItem
            
            label="promotion"
            icon={({color,size})=>(
                <Icon
                    type="material-community"
                    name="tag-heart"

                    color={color}
                    size={size}

                />
            )}


        />

          <DrawerItem
            
            label="settings"
            icon={({color,size})=>(
                <Icon
                    type="material-community"
                    name="cog-outline"

                    color={color}
                    size={size}

                />
            )}


        />

          <DrawerItem
            
            label="help"
            icon={({color,size})=>(
                <Icon
                    type="material-community"
                    name="lifebuoy"

                    color={color}
                    size={size}

                />
            )}


        />

        <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
            <Text style={Styles.preferenes}>preferences</Text>

            <View style={Styles.switchText}>
                <Text style={Styles.darkThemeText}>Dark Theme</Text>

                <View style={{paddingRight:10}}>
                    <Switch
                        trackColor={{false:"#76577",true:"#81b0ff"}}
                        thumbColor= "#f4f3f4"
                    
                    />

                </View>

            </View>

        </View>

  

            </DrawerContentScrollView>
          

            <DrawerItem
            
            label="Sign Out"
            onPress={()=>(signOut())}
            icon={({color,size})=>(
                <Icon
                    type="material-community"
                    name="logout-variant"

                    color={color}
                    size={size}
                    onPress={()=>(signOut())}

                />
                
            )}


        />
      

        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
       
    },
    avatar:{
        borderWidth:4,
        borderColor:colors.cardbackground
       
    },
    preferenes:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkThemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft: 0,
        fontWeight:"bold"
    }
})

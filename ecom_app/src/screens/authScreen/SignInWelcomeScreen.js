import React,{useState,useRef,useEffect, useContext} from "react";

import { View,Text,StyleSheet,Dimensions,Image} from "react-native";
import { colors,parameters,title } from "../../global/Styles";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";
import { Icon,Button,SocialIcon } from "react-native-elements";
import { SignInContex } from "../../contexts/AuthContext";
import Auth from '@react-native-firebase/auth'




export default function SignInWelcomeScreen({navigation}){
    const{dispatchSignedIn}=useContext(SignInContex)

    useEffect(()=>{
        Auth().onAuthStateChanged((user)=>{
            if(user){
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
            }else{
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            }
        })
      
    },[])
    return(
        <View style={{flex:1}}>

            <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>DISCOVER RESTURENTS</Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>

            <View style={{flex:4,justifyContent:"center"}}>

                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                       <Image
                       
                       source={{uri:"https://firebasestorage.googleapis.com/v0/b/e-com-app-ffe74.appspot.com/o/pexels-ella-olsson-1640772.jpg?alt=media&token=635b3b15-1db3-437f-a11a-114444f010f3"}}
                       style={{height:"100%",width:"100%"}}

                       />

                    </View>

                    <View style={styles.slide2}>
                       <Image
                       
                       source={{uri:"https://firebasestorage.googleapis.com/v0/b/e-com-app-ffe74.appspot.com/o/img2.jpg?alt=media&token=1da9111a-7273-43df-83fd-78f6506101b0"}}
                       style={{height:"100%",width:"100%"}}

                       />

                    </View>

                    <View style={styles.slide3}>
                       <Image
                       
                       source={{uri:"https://firebasestorage.googleapis.com/v0/b/e-com-app-ffe74.appspot.com/o/img3.jpg?alt=media&token=f7a681af-eec6-4592-8d58-f6e8aa4961b3"}}
                       style={{height:"100%",width:"100%"}}

                       />

                    </View>

                    <View style={styles.slide3}>
                       <Image
                       
                       source= {{uri:"https://firebasestorage.googleapis.com/v0/b/e-com-app-ffe74.appspot.com/o/img6.jpg?alt=media&token=b8bddd58-ec58-4e1f-95c1-ad2a82cc9328"}}
                       style={{height:"100%",width:"100%"}}

                       />

                    </View>
                    </Swiper>   
                    
                    
                

            </View>
            
            <View style={{flex:4,justifyContent:"flex-end",marginBottom:20}}>

            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button
                title="SIGN-IN"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={()=>{
                        navigation.navigate("SignInScreen")
                }}
                />
        </View>

        <View style={{marginHorizontal:20,marginTop:30}}>
                <Button
                title="Create an account"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                onPress={()=>{navigation.navigate("SignUpScreen")}}
                
                />
            </View>

         </View>


        </View>
    )
}

const styles= StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6EB'
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAE5'

    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#92BBD9'
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:"#ff8c52",
        height:50,
        paddingHorizontal:20,
        borderColor:colors.buttons
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
})
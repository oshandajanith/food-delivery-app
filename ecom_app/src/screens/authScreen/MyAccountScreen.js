import React,{useContext}from "react";
import { View,Text,StyleSheet, TouchableOpacity,Alert} from "react-native";
import Header from "../../components/Header";
import { colors } from "../../global/Styles";
import { Avatar,Icon} from "react-native-elements";
import { SignInContex } from "../../contexts/AuthContext";
import Auth from '@react-native-firebase/auth'


export default function MyAccountScreen({navigation,route}){
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
        <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}/>

            
        <View>
             <View style={{flexDirection:"column",alignItems:"center",paddingLeft:20,paddingVertical:10,marginTop:20}}>
                <Avatar
                    rounded
                    avatarStyle={Styles.avatar}
                    size={100}
                    source={{uri:"https://firebasestorage.googleapis.com/v0/b/e-com-app-ffe74.appspot.com/o/images%20(3).jpg?alt=media&token=98992929-3e2b-4237-9370-7a9df3e33b7d"}}
                />
            <View style={{marginLeft:10}}>
                <Text style={{fontWeight:"bold",color:colors.grey3,fontSize:18,marginTop:20}}>oshanda janih</Text>
            </View>

             </View>
             <Text style={{color:colors.grey1,fontSize:20,marginLeft:10,fontWeight:'bold',marginTop:10}}>Saved Place</Text>
             <View style={{alignItems:"flex-start",marginTop:20,marginLeft:10}}>
             <Icon
                            type="material-community"
                            name="home"
                            color={colors.grey2}
                            size={36}

                        />
                        <View style={{marginLeft:50,marginTop:-23,justifyContent:"center"}}>
                            <Text style={{color:colors.grey3,fontWeight:"bold",fontSize:15}}>HOME ADDRESS</Text>
                            <Text style={{marginTop:10,color:colors.grey1}}>Ibbawala,weligama</Text>
                            </View>
                        
             </View>
             <View style={{alignItems:"flex-start",marginTop:20,marginLeft:10}}>
             <Icon
                            type="material-community"
                            name="bag-checked"
                            color={colors.grey2}
                            size={36}

                        />
                        <View style={{marginLeft:50,marginTop:-25,justifyContent:"center"}}>
                            <Text style={{color:colors.grey3,fontWeight:"bold",fontSize:15}}> ADDRESS</Text>
                            <Text style={{marginTop:10,color:colors.grey1}}>Ibbawala,weligama</Text>
                            </View>
                            
                        
             </View>
             <View style={{alignItems:"flex-start",marginTop:20,marginLeft:10}}>
             <Icon
                            type="material-community"
                            name="phone"
                            color={colors.grey2}
                            size={30}

                        />
                        <View style={{marginLeft:50,marginTop:-25,justifyContent:"center"}}>
                            <Text style={{color:colors.grey3,fontWeight:"bold",fontSize:15}}>Phone No</Text>
                            <Text style={{marginTop:10,color:colors.grey1}}>0755839484</Text>
                            </View>
                            
                        
             </View>
            
             <View style={{marginTop:60}}>
                <Text style={{color:colors.grey1,fontSize:20,marginLeft:10,fontWeight:'bold',marginTop:10}}>Other Option</Text>
             </View>
             <View style={{alignItems:"flex-start",marginTop:40,marginLeft:10}}>
             <Icon
                    type="material-community"
                    name="logout-variant"

                    color={colors.grey2}
                    size={30}
                    onPress={()=>(signOut())}

                />
                <View style={{marginLeft:50,marginTop:-25,justifyContent:"center"}}>
                            <Text style={{color:colors.lightgreen,fontWeight:"bold",fontSize:15,fontStyle:"italic"}}>Sign-Out</Text>
                            </View>
                
             </View>
             
             </View>
             </View>
    )
}

const Styles=StyleSheet.create({
    
        container:{
            flex:1,
            backgroundColor:"white",
        },
        view1:{
            justifyContent:"center",
            alignItems:"flex-start",
            marginTop:10,
            marginBottom:10,
            paddingHorizontal:15
        },
        avatar:{
            borderWidth:4,
            borderColor:colors.cardbackground
           
        },
})
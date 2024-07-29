import React, { useEffect } from "react";
import { View,Text,StyleSheet } from "react-native";
import LottieView from "lottie-react-native";


const PaymentDone=({navigation})=> {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('HomeScreen')
        },3000);
    },[])
  return (
    <LottieView

      source={require("../authScreen/animation/Animation - 1722166633054 (1).json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop
    />
  );
}

export default PaymentDone;
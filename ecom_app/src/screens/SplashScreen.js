import React, { useEffect } from "react";
import { View,Text,StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import Header from "../components/Header";

const SplashScreen=({navigation})=> {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('SignInWelcomeScreen')
        },3000);
    },[])
  return (
    <LottieView

      source={require("../assets/Animation - 1717648927140.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop
    />
  );
}

export default SplashScreen;
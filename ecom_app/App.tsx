
import React from 'react';
import { View,Text,StyleSheet,StatusBar } from 'react-native';
import {colors} from './src/global/Styles';
import RootNavigator from './src/Navigation/RootNavigator';
import { SignInContexProvider } from './src/contexts/AuthContext';
import { store } from './src/Redux/store'
import { Provider } from 'react-redux'









export default function App(){
  return(
    <Provider store={store}>
    <SignInContexProvider>
      

    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor ={ colors.Statusbar}
      
      />

      <RootNavigator
      />
      
    
    </View>

    </SignInContexProvider>
    </Provider>
    
  )

}
const styles=StyleSheet.create({
  container:{flex:1}
})

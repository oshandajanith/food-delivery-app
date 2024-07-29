import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { colors } from "../../global/Styles";
import { Icon } from "react-native-elements";
import { menuData,specialData } from "../../global/Data";


const MenuScreen=({navigation,restaurent,onPress})=>{
    const handlePress=()=>{
        //navigation.navigate("productSec")

    }
    return(
        <View style={styles.container}>
            <View>
            {specialData.map((items)=>

                <View key={items.key} style={styles.viwe1}>
                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <View style={styles.viwe2}>
                            <Icon
                                name="star"
                                type="material-community"
                                color="gold"

                            />

                            <Text style={styles.text1}>{items.title}</Text>

                        </View>

                    </TouchableOpacity>
                    

                </View>
                
            )

                 
            }
            </View>

            <View>
            {menuData.map((items)=>

                <View key={items.key} style={styles.viwe1}>
                    <TouchableOpacity
                        onPress={onPress}
                    >
                        <View style={styles.viwe2}>
                            <Text style={styles.text1}>{items.title}</Text>

                        </View>

                    </TouchableOpacity>
                    

                </View>
                
            )

                 
            }
            </View>

        </View>
    )
}

export default MenuScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    viwe1:{
        paddingHorizontal:10
    },
    viwe2:{
        flexDirection:"row",
        borderBottomWidth:1,
        alignItems:"center",
        padding:10,
        borderBottomColor:colors.grey5
    },
    text1:{
        color:colors.grey3,
        fontSize:18,
        fontWeight:"bold",
    }
})
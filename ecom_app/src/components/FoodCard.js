import React from "react";
import {Text,View,TouchableOpacity,Image,StyleSheet,Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import { colors,parameters } from "../global/Styles";

export default function FoodCard({
    onPressFoodCard,
    restaurentName,
    deliveryAvailable,
    discountPrecent,
    NumberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
    
}){
    return(
        <TouchableOpacity
        onPress={onPressFoodCard }
        >
            <View style={{...Styles.cardView,width:screenWidth}}>
                <Image
                    style={{...Styles.image,width:screenWidth}}
                    source={{uri:images}}
                />

<View>
                <View>
                    <Text style={Styles.restaurentName}>{restaurentName}</Text>
                </View>

                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={Styles.distance}>
                        <Icon

                            name="place"
                            type="material"
                            color={colors.grey2}
                            size={18}
                            iconStyle={{marginTop:3}}
                        
                        />

                        <Text style={Styles.Min}> {farAway} Min</Text>

                    </View>

                    <View style={{flex:9,flexDirection:"row"}}>
                        <Text style={Styles.address}>{businessAddress}</Text>

                    </View>

                </View>
            </View>

            </View>

           

            <View style={Styles.review}>
                <Text style={Styles.average}>{averageReview}</Text>
                <Text style={Styles.numberOfReview}>{NumberOfReview} Reviews</Text>

            </View>
        </TouchableOpacity>
    )
}

const Styles=StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:150,
        
    },
    restaurentName:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1,
        marginTop:5,
        marginLeft:10
    },
    distance:{
        flex:4,
        flexDirection:"row",
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },
    Min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
    },
    address:{
        fontSize:12,
        paddingTop:5,
        color:colors.grey2,
        paddingHorizontal:10
    },
    review:{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(52,52,52,0.3)',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    average:{
        color:"white",
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    },
    numberOfReview:{
        color:"white",
        fontSize:13,
        marginRight:10,
        marginLeft:0
    }
})

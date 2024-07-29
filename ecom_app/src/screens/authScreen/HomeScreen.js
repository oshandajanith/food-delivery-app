import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,TouchableOpacity,ScrollView,FlatList,Pressable,Image, Dimensions} from "react-native";
import {Icon} from 'react-native-elements'
import Countdown from 'react-native-countdown-component'
import HomeHeader from "../../components/HomeHeader";
import { colors,parameters } from "../../global/Styles";
import { filterData,restaurantsData } from "../../global/Data";
import FoodCard from "../../components/FoodCard";
import { color } from "@rneui/base";
import RestaurentHomeScreen from "./RestaurentHomeScreen";
import { useSelector } from "react-redux";



const SCREEN_WIDTH=Dimensions.get('window').width

export default function HomeScreen({navigation,route}){
    
    

    const[delivery,setdelivery]=useState(true)
    const[indexCheck,setIndexCheck]=useState("0")

    return(<View style={Styles.contaier}>
        <HomeHeader navigation={navigation}/>
    
    <ScrollView
    
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
    >
        <View style={{backgroundColor:colors.cardbackground,paddingBottom:5}}>

        <View style={{marginTop:10,flexDirection:'row',justifyContent:"space-evenly"}}>

            <TouchableOpacity
                onPress={()=>{
                    setdelivery(true)
                }}
            >
                <View style={{...Styles.deliveryButton,backgroundColor:delivery?colors.buttons:colors.grey4}}>
                    <Text style={Styles.deliveryText}>Delivery</Text>

                </View>
            </TouchableOpacity>

            <TouchableOpacity
                 onPress={()=>{
                    setdelivery(false)
                    navigation.navigate("RestaurentMapScreen")
                }}
            >
                <View style={{...Styles.deliveryButton,backgroundColor:delivery?colors.grey4:colors.buttons}}>
                    <Text style={Styles.deliveryText}>Pick Up</Text>

                </View>
            </TouchableOpacity>

            </View>
        </View>


        <View style={Styles.filterView}>

        <View style={Styles.addressView}>
            <View style={{flexDirection:"row",alignItems:"center",paddingLeft:10}}>
                <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
                />

                <Text style={{marginLeft:5}}>22 weligama</Text>
            </View>

            <View style={Styles.clockView}>
                <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
                />

                <Text style={{marginLeft:5}}>Now</Text>
            </View>

        </View>
                <View>
                    <Icon
                    type="material-community"
                    name="tune"
                    color={colors.grey1}
                    size={26}
                    />

                </View>

        </View>

       <View style={Styles.headerTextView}>
             <Text style={Styles.headerText}>Categories</Text>
        </View>

        <View>
                <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                data={filterData}
                keyExtractor={(item)=>item.id}
                extraData={{indexCheck}}
                renderItem={({item,index})=>(
                    <Pressable
                        onPress={()=>{setIndexCheck(item.id)}}
                    >
                        <View style={indexCheck=== item.id ? {...Styles.smallCardSelected}:{...Styles.smallCard}}>
                            <Image
                                style={{height:60,width:60, borderRadius:30}}
                                source={item.image}
                                
                            />
                            <View>
                                <Text style={indexCheck=== item.id ?{...Styles.smallCardTextSelected}:{...Styles.smallCardText}}>{item.name}</Text>
                            </View>

                        </View>
                    </Pressable>

                )}
                />
        </View>

        <View style={Styles.headerTextView}>
             <Text style={Styles.headerText}>Free delivery Now</Text>
        </View>

        <View>
            <View style={{flexDirection:'row',alignItems:"center"}}>
                <Text style={{marginLeft:15,fontSize:16,marginTop:-10,marginRight:5}}>Option changing in</Text>
                <Countdown
                    until={3600}
                    size={14}
                    digitStyle={{backgroundColor:colors.lightgreen}}
                    digitTextStyle={{color:colors.cardbackground}}
                    timeToShow={['M','S']}    
                    timeLabels={{m:'Min',s:'Sec'}}            
                />

            </View>
            <FlatList
                style={{marginTop:10,marginBottom:10}}
                horizontal={true}
                data={restaurantsData}
                keyExtractor={(item,index)=>index.toString()}
                showsHorizontalScrollIndicator={false}
                

                renderItem={({item,index})=>(
                    <View style={{marginRight:5}}>
                        <FoodCard
                            screenWidth={SCREEN_WIDTH*0.8}
                            images={item.images}
                            restaurentName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            averageReview={item.averageReview}
                            NumberOfReview={item.NumberOfReview}
                            onPressFoodCard={()=>{navigation.navigate("RestaurentHomeScreen",{id:index,restaurent:item.restaurantName})}}
                        


                        />
                    </View>
                )}

            />
        </View>

        <View style={Styles.headerTextView}>
             <Text style={Styles.headerText}>Promotions available</Text>
        </View>

        <View>
            <FlatList
                style={{marginTop:10,marginBottom:10}}
                horizontal={true}
                data={restaurantsData}
                keyExtractor={(item,index)=>index.toString()}
                showsHorizontalScrollIndicator={false}

                renderItem={({item,index})=>(
                    <View style={{marginRight:5}}>
                        <FoodCard
                            screenWidth={SCREEN_WIDTH*0.8}
                            images={item.images}
                            restaurentName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            averageReview={item.averageReview}
                            NumberOfReview={item.NumberOfReview}
                            onPressFoodCard={()=>{navigation.navigate('RestaurentHomeScreen',{id:index,restaurent:item.restaurantName})}}
                            
                            

                        />
                    </View>
                )}

            />
        </View>

        <View style={Styles.headerTextView}>
             <Text style={Styles.headerText}>Restaurent in your area</Text>
        </View>

        <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
            {
                restaurantsData.map((item,index)=>(
                    
                    <View key={item.id} style={{paddingBottom:20}}>
                        <FoodCard
                            screenWidth={SCREEN_WIDTH*0.95}
                            images={item.images}
                            restaurentName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            averageReview={item.averageReview}
                            NumberOfReview={item.NumberOfReview}
                            onPressFoodCard={()=>{navigation.navigate("RestaurentHomeScreen",{id:index,restaurent:item.restaurantName})}}

                            

                        />
                        
                        </View>

                )
            )
            }
        </View>

      
        </ScrollView>
        {delivery &&
        <View style={Styles.floatingButton}>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('RestaurentMapScreen')
                }}
            >
                <Icon
                    name="place"
                    type="material"
                    size={32}
                    color={colors.buttons}
                
                />

                <Text style={{color:colors.grey2}}>Map</Text>

            </TouchableOpacity>
            
            </View>
        }
        

    </View>)
}

const Styles= StyleSheet.create({

    contaier:{
        flex:1,
       
    },
    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5

    },
    deliveryText:{
        marginLeft:5,
        fontSize:16,

    },
    filterView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginHorizontal:10,
        marginVertical:10,
        
    },
    clockView:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:30,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    addressView:{
        flexDirection:"row",
        backgroundColor:colors.grey5,
        borderRadius:15,
        paddingVertical:3,
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    headerText:{
        color:colors.grey2,
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    },
    smallCard:{
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100,

    },
    
    smallCardTextSelected:{
        fontWeight:"bold",
        color:colors.cardbackground
    },
    
    smallCardText:{
        fontWeight:"bold",
        color:colors.grey2


},

floatingButton:{
    position:"absolute",
    bottom:10,
    right:15,
    backgroundColor:"white",
    elevation:0,
    width:60,
    height:60,
    borderRadius:30,
    alignItems:'center',
    
}
})
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { colors } from "../../global/Styles";
import { CheckBox, Icon } from "react-native-elements";
import { foodData } from "../../global/Data";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getProduct } from "../../Redux/Features/Reducers/ProductReducer";
import { decrement, increment } from "../../Redux/Features/counterSlice";

const PreferenceScreen = () => {
    const products=useSelector((state)=>state.product.product)
    console.log(products)
    const dispatch=useDispatch();
    const count=useSelector(state=>state.counter.Value);
    console.log(count)

    const route = useRoute();
    const navigation = useNavigation();
    
    const index = route.params.index;
    const { name, details, price, images } = foodData[index];

    const [preference, setPreference] = useState(foodData[index].preferenceData);
    const [required, setRequired] = useState(foodData[index].required);
    const [minimumQuantity, setMinimumQuantity] = useState(foodData[index].minimum_quatity);
    const [counter, setCounter] = useState(foodData[index].counter);

    const handleCheckBoxChange = (item, id, items) => {
        if (minimumQuantity[id] !== null) {
            const checkedItems = item.filter(i => i.checked);
            item.forEach(i => {
                if (i.id === items.id) {
                    if (checkedItems.length < minimumQuantity[id]) {
                        i.checked = !i.checked;
                    } else {
                        i.checked = false;
                    }
                }
            });
            counter[id] += 1;
            setPreference([...preference]);
            setCounter([...counter]);
        } else {
            item.forEach(i => {
                if (i.id === items.id) {
                    i.checked = !i.checked;
                }
            });
            setPreference([...preference]);
        }
    };

    

    return (
        <View style={Styles.container}>
            <ScrollView>
                <View style={Styles.header}>
                    <Image style={Styles.backgrondimge} source={images} />
                </View>
                <View style={Styles.bar}>
                    <Text style={Styles.title}>Choose a Preference</Text>
                </View>
                <View style={Styles.view12}>
                    <Icon
                        name="arrow-left"
                        type="material-community"
                        color={colors.cardbackground}
                        size={25}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={Styles.view1}>
                    <Text style={Styles.text1}>{name}</Text>
                    <Text style={Styles.text2}>{details}</Text>
                </View>
                <View style={Styles.view2}>
                    <Text style={Styles.text8}>Choose a meal type</Text>
                    <View style={Styles.view3}>
                        <Text style={Styles.text4}>REQUIRED</Text>
                    </View>
                </View>
                <View style={Styles.view4}>
                    <View style={Styles.view5}>
                        <View style={Styles.view6}>
                            <CheckBox
                                center
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                                checked={true}
                                checkedColor={colors.buttons}
                            />
                            <Text style={Styles.text5}>. . . . . .</Text>
                        </View>
                        <Text style={Styles.text6}>RS: {price}</Text>
                    </View>
                </View>
                <View>
                    {preference.map(item => (
                        <View key={item.id}>
                            <View style={Styles.view2}>
                                <Text style={Styles.text8}>
                                    {foodData[index].preferenceTitle[preference.indexOf(item)]}
                                </Text>
                                {required[preference.indexOf(item)] && (
                                    <View style={Styles.view9}>
                                        <Text style={Styles.text7}>
                                            {minimumQuantity[preference.indexOf(item)]} REQUIRED
                                        </Text>
                                    </View>
                                )}
                            </View>
                            <View style={Styles.view10}>
                                {item.map(items => (
                                    <TouchableOpacity
                                        key={items.id}
                                        onPress={() => handleCheckBoxChange(item, preference.indexOf(item), items)}
                                    >
                                        <View style={Styles.view4}>
                                            <View style={Styles.view19}>
                                                <View style={Styles.view6}>
                                                    <CheckBox
                                                        center
                                                        checkedIcon="check-square-o"
                                                        uncheckedIcon="square-o"
                                                        checked={items.checked}
                                                        checkedColor={colors.buttons}
                                                    />
                                                    <Text style={{ color: colors.grey2, marginLeft: -10 }}>
                                                        {items.name}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={Styles.view13}>
                    <Text style={Styles.text11}>Quantity</Text>

                </View>
                <View style={Styles.view14}>
                    <View style={Styles.view15}>
                    <Icon
                        name="remove"
                        type="material"
                        color={colors.black}
                        size={25}
                        onPress={()=>dispatch(decrement())}
                        />

                    </View>
                    <Text style={Styles.text9}>{count}</Text>
                    <View style={Styles.view16}>
                    <Icon
                        name="add"
                        type="material"
                        color={colors.black}
                        size={25}
                        onPress={()=>dispatch(increment())}
                        />
                    </View>

                </View>
                <TouchableOpacity
                onPress={() => navigation.navigate('PaymentDone')}
            >
                <View style={Styles.view17}>
                    <View style={Styles.view18}>
                        <Text style={Styles.text10}>pay Rs: {price*count}.00</Text>
                    </View>
                </View>
            </TouchableOpacity>
           
        </View>
    );
};



export default PreferenceScreen;

const Styles=StyleSheet.create({
    container:{
        flex:1
    },
    fill:{
        flex:1
    },
    content:{
        flex:1
    },
    header:{
        width:"100%",
        backgroundColor:colors.buttons,
        overflow:"hidden",
        height:180//HEADER_MAX_HEIGHT,

    },
    backgrondimge:{
       
        width:"100%",//null,
       height:180,//HEADER_MAX_HEIGHT,
        resizeMode:"cover"
    },
    bar:{
        backgroundColor:'transparent',
        marginTop:Platform.OS==='ios'?28:38,
        height:32,
        alignItems:"center",
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        marginTop:10
    },
    title:{
        color:"white",
        fontSize:28,
        fontWeight:'bold',
        marginLeft:40,
        
    },
    scrollViewContent:{
        //paddingTop:Platform.OS!=='ios'?
       // HEADER_MAX_HEIGHT:0
    },
    row:{
        height:40,
        margin:16,
        backgroundColor:'#D3D3D3',
        alignItems:"center",
        justifyContent:"center"
    },
    view1:{
        backgroundColor:"white",
        padding:10,
        marginBottom:10
    },
    text1:{
        fontSize:15,
        color:colors.grey1,
        fontWeight:"bold",
    },
    text2:{
        fontSize:14,
        color:colors.grey2,
        marginTop:5
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text3:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.grey1,
        marginLeft:10
    },
    view3:{
        borderWidth:3,
        borderColor:colors.grey5,
        borderRadius:5,
        marginRight:10
    },
    text4:{
        fontWeight:'bold',
        color:colors.grey3,
        padding:5
    },
    view4:{
        backgroundColor:"white",
        marginBottom:5
    },
    view5:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingRight:10
    },
    view6:{
        flexDirection:"row",
        alignItems:"center"
    },
    text5:{fontWeight:"bold",
        marginLeft:-10
    },
    text6:{
        fontSize:16,
        fontWeight:'bold'
    },
    view7:{
        flexDirection:"row",
        alignItems:"center",
        color:colors.grey1,
        marginLeft:10
    },
    text8:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.grey1,
        marginLeft:10,
    },
    view9:{
        borderWidth:3,
        borderColor:colors.grey5,
        borderRadius:5,
        marginRight:10
    },
    text7:{
        fontWeight:"bold",
        color:colors.grey3,
        padding:5
    },
    view10:{
        backgroundColor:"white",
        marginBottom:15
    },
    view11:{
        flexDirection:"row",
        alignItems:"center"
    },
    view12:{
        position:"absolute",
        top:20,
        left:15,
        
    },
    view13:{
        paddingBottom:0,
        marginTop:5
    },
    text11:{
        paddingLeft:10,
        fontWeight:'bold',
        fontSize:18,
        color:colors.grey3
    },
    view14:{
        flexDirection:"row",
        backgroundColor:colors.cardbackground,
        paddingVertical:5,
        marginBottom:0,
        justifyContent:"space-between",
        paddingHorizontal:15,
        paddingVertical:10,
        marginBottom:5
    },
    view15:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:colors.lightgreen,
        alignItems:"center",
        justifyContent:"center",
    },
    text9:{
        fontWeight:'bold',
        fontSize:18
    },
    view16:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:colors.lightgreen,
        alignItems:"center",
        justifyContent:"center",

    },
    view17:{
        alignItems:"center",
        padding:10,
        backgroundColor:colors.cardbackground,
        marginTop:-5
    },
    view18:{
        backgroundColor:colors.buttons,
        alignItems:"center",
        paddingVertical:5,
        marginBottom:0,
        width:320,
        borderRadius:12,

    },
    text10:{
        padding:10,
        fontWeight:"bold",
        fontSize:18
    },view19:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingRight:10
    }


})
    
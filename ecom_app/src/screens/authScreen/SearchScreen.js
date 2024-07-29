import React from "react";
import { View,Text,StyleSheet,FlatList,TouchableWithoutFeedback,ImageBackground,Dimensions} from "react-native";
import SearchComponet from "../../components/SearchComponet";
import { colors } from "../../global/Styles";
import { filterData2 } from "../../global/Data";

const SCREEN_WIDTH=Dimensions.get('window').width;

export default function SearchScreen({navigation}){

    return(
        <View style={{flex:1,marginTop:10}}>

           <SearchComponet/>
           <View style={{marginTop:10}}>

            <View>
            <FlatList
                style={{}}
                data={filterData2}
                keyExtractor={item=>item.id}
                renderItem={({item,index})=>(
                    <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("SearchResultScreen",{item:item.name})
                        }}
                    >
                        <View style={styles.imageView}>
                            <ImageBackground
                               style={styles.image}
                               source={{uri:item.image}}
                                >
                                
                                <View style={styles.textView}>
                                    <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                                </View>
                                </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}

                horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListEmptyComponent={ <Text style={styles.listHedar}>Top Categories</Text>}
                //ListFooterComponent={<Footer/>}
            />
           </View>
        </View>

        </View>
    )
}

/*const Footer=()=>{
    return(

        <View style={{marginTop:20,marginBottom:30}}>
       
        <View style={{}}>
        <FlatList
            style={{marginBottom:20}}
            data={filterData2}
            keyExtractor={item=>item.id}
            renderItem={({item,index})=>(
                <TouchableWithoutFeedback
                onPress={()=>{
                    navigation.navigate("SearchResultScreen",{item:item.name})
                }}

                >
                    <View style={styles.imageView}>
                        <ImageBackground
                            style={styles.image}
                            sourse={{uri:item.image}}
                        >
                            
                            <View style={styles.textView}>
                                <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
            )}

            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListEmptyComponent={<Text style={styles.listHedar}>More Categories</Text>}
          
        />
       </View>
    </View>

    )
}*/

const styles=StyleSheet.create({
    imageView:{
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        width:SCREEN_WIDTH*0.4475,
        height:SCREEN_WIDTH*0.4475,
        marginLeft:SCREEN_WIDTH*0.035,
        marginBottom:SCREEN_WIDTH*0.035
    },
    image:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10
    },

    listHedar:{
        fontSize:16,
        color:colors.grey1,
        paddingBottom:10,
        marginLeft:12
    },
    textView:{
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'rgba(52,52,52,0.3)'
    }
})
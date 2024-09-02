import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../Theme';
import { scale } from '../Theme/ResposiveSize';
import { Typography } from '../Theme/Typography';
import { FontSize } from '../Theme/FontSize';
import QuantitySelector from '../Component/Filters/QuantitySelector';
import Button from '../Component/Buttons/Button';
import { navigate, navigationRef } from '../Navigator/Utils';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductView = ({route}: any) => {
    const { item } = route.params
    const [quantity, setQuantity] = useState(1);
    const proucimage = require("../assets/Image/viewproduct.png")
    console.log("item", item)


    const handleQuantityChange = (e) => {
        setQuantity(e);
      };


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.white}}>
        <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
        <ScrollView>
        <Image source={proucimage} style={{height: scale(340), width: scale(375), alignSelf: "center"}} resizeMode='contain' />
        
        <Pressable style={styles.back} onPress={() => navigationRef.goBack()}>
            <Feather name="chevron-left" size={35} color={Color.black} />
          </Pressable>
          <Pressable style={styles.heart} onPress={() => navigationRef.goBack()}>
            <AntDesign name="heart" size={25} color={Color.orange} />
          </Pressable>
        <View style={{margin: 20,}}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
           <Text style={[Typography.samll_bold,{fontSize: FontSize.Font20}]}>{item?.name}</Text>
           <Text style={[Typography.small,{fontSize: FontSize.Font20,  alignSelf: "flex-end"}]}>RS.{item?.price}</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10, alignItems:"center", alignSelf: "flex-end"}}>
            <View style={styles.off}>
            <Text style={[Typography.small, { fontSize: FontSize.Font12, color: Color.white }]}>{item.off}</Text>
            </View>
           <Text style={[Typography.samll_bold,{ fontSize: FontSize.Font20, lineHeight: 27}]}>{item?.lessprice}</Text>
           </View>
           <View style={{borderBottomWidth: 1, borderColor: Color.border, marginTop: 20}} />
           <QuantitySelector initialQuantity={quantity} onQuantityChange={handleQuantityChange} />
           <Button title='Add to Cart' mainStyle={{marginTop: 20}} onPress={() => navigate("CardScreen", {item})}  />
           <View>
            <Text style={[Typography.samll_bold,{color: Color.black, marginVertical: 10}]}>About Product:</Text>
            <Text style={Typography.small}>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure</Text>
           </View>
           <Text style={[Typography.samll_bold,{color: Color.black, marginVertical: 10}]}>Reviews:</Text>
           </View>
           </ScrollView>
    </SafeAreaView>
  )
}

export default ProductView

const styles = StyleSheet.create({
    off: {
        backgroundColor: Color.orange,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        height: scale(27),
        width: scale(50)
    },
    total: {
        marginTop: 20,
        fontSize: 18,
      },
      back: {
        position: "absolute",
        backgroundColor: Color.boxBg,
        height: scale(40),
        width: scale(40),
        borderRadius: scale(50),
        margin: scale(15),
        top: 20,
        justifyContent: "center",
        alignItems: "center",
      },
      heart: {
        position: "absolute",
        alignSelf: "flex-end",
        backgroundColor: Color.boxBg,
        top: 20,
        height: scale(40),
        width: scale(40),
        borderRadius: scale(50),
        margin: scale(15),
        right: 3,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: Color.orange
      },
})
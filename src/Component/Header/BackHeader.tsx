import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, moderateScale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import {navigationRef } from '../../Navigator/Utils'

const BackHeader = () => {
const back = require("../../assets/Image/leftarrow.png")

  return (
    <Pressable onPress={() => navigationRef.goBack()} style={styles.mainContainer}>
    <View style={styles.container}>
        <Image source={back} style={{width: 22, height: 18}} />
    </View>
    </Pressable>
  )
}

export default BackHeader

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor: Color.white, 
    height: moderateScale(90),
     elevation: 5},
    container:{
        borderRadius: moderateScale(50),
        borderWidth: 1,
        borderColor: Color.border,
        height: moderateScale(40),
        width: moderateScale(40),
        alignItems: "center",
        justifyContent: "center",
        margin: moderateScale(10),
        marginTop: moderateScale(35)
    }
})
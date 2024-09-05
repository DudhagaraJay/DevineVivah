import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, scale } from '../../Theme/ResposiveSize'
import { Color } from '../../Theme'
import { navigationRef } from '../../Navigator/Utils'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'

interface Back {
  centerTitle?: string
  rightTitle?: string
  onpress?: Function
}
const BackHeader = (Props: Back) => {
  const back = require("../../assets/Image/leftarrow.png")


  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Pressable onPress={() => navigationRef.goBack()}>
          <View style={styles.container}>
            <Image source={back} style={{ width: 22, height: 18 }} />
          </View>
        </Pressable>

        <Text
          style={[
            Typography.samll_bold,
            styles.centerTitle,
            Props.rightTitle ? { transform: [{ translateX: scale(40) }] } : { transform: [{ translateX: scale(-15) }] }
          ]}
        >
          {Props.centerTitle}
        </Text>

        <Text onPress={() => Props.onpress ? Props.onpress() : null} style={[Typography.samll_bold, styles.rightTitle]}>{Props.rightTitle}</Text>
      </View>
    </View>
  )
}

export default BackHeader

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Color.white,
    height: moderateScaleVertical(100),
    elevation: 5,
    justifyContent: "center"
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
  },
  container: {
    borderRadius: moderateScale(50),
    borderWidth: 1,
    borderColor: Color.border,
    height: moderateScale(40),
    width: moderateScale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  centerTitle: {
    color: Color.black,
    fontSize: FontSize.Font18,
    alignSelf: "center",

  },
  rightTitle: {
    color: Color.orange,
    fontSize: FontSize.Font18,
  }
})

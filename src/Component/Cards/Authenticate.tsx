import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'

const Authenticate = () => {
    const google = require("../../assets/Image/google.png")
    const facebook = require("../../assets/Image/facebook.png")
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: moderateScale(30) }}>
            <View style={styles.cards}>
                <Image source={google} style={{ height: 27, width: 27 }} resizeMode='contain' />
                <Text style={[styles.title, Typography.small]}>Google</Text>
            </View>
            <View style={styles.cards}>
                <Image source={facebook} resizeMode='contain' style={{ height: 27, width: 27 }} />
                <Text style={[styles.title, Typography.small]}>Facebook</Text>
            </View>
        </View>
    )
}

export default Authenticate

const styles = StyleSheet.create({
    cards: {
        backgroundColor: Color.inputBg,
        borderRadius: moderateScale(50),
        borderWidth: 1,
        borderColor: Color.border,
        flexDirection: "row",
        gap: 10,
        padding: 15,
        width: moderateScale(165),
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center"

    },
    title: {
        color: "#4A4B4E"
    }
})
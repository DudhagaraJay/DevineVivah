import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import { height, moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import SearchContent from '../Search/SearchCard'
import Filters from '../Filters/Filters'

const HeaderCard = () => {

    const profile = require("../../assets/Image/avatar.png")
    const bell = require("../../assets/Image/bell.png")

    return (
        <View style={styles.mainView}>
            <StatusBar backgroundColor={Color.orange} barStyle={'light-content'} />
            <View style={{ marginTop: moderateScale(30), padding: moderateScale(10), flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={styles.profileCard}>
                    <Image source={profile} style={styles.profile} />
                    <Text style={[styles.name, Typography.small]}>Good Evening, Joe</Text>
                </View>
                <Pressable>
                    <Image source={bell} style={styles.bell} />
                </Pressable>
            </View>
            <View style={styles.searchCard}>
                <SearchContent />
                <Filters />
            </View>
        </View>
    )
}

export default HeaderCard

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Color.orange,
        minHeight: moderateScale(157),
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13
    },
    name: {
        color: Color.white
    },
    profileCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    profile: {
        height: moderateScale(47),
        width: moderateScale(47),
        borderRadius: moderateScale(50)
    },
    searchCard: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        gap: 10
    },
    bell: {
        height: moderateScale(27),
        width: moderateScale(27),
    }
})
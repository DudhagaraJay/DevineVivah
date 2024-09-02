import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import { Typography } from '../../Theme/Typography'
import { FontSize } from '../../Theme/FontSize'
import { scale } from '../../Theme/ResposiveSize'

const Reviews = () => {
    const [seletedindex, setSeletedIndex] = useState(0)

    const profile = require("../../assets/Image/profile1.png")
    const star = require("../../assets/Image/star.png")

    const tik = require("../../assets/Image/smallTik.png")
    const tab = ["Latest", "With Photos", "Detailed Reviews"]

    const DATA = [
        {
            id: '1',
            name: 'Dale Thiel',
            profile: require('../../assets/Image/profile1.png'), // Your profile image
            rating: 5.0,
            time: '11 months ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
            id: '2',
            name: 'Jay Patel',
            profile: require('../../assets/Image/profile1.png'), // Your profile image
            rating: 5.0,
            time: '11 months ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
        {
            id: '3',
            name: 'Hit Patel',
            profile: require('../../assets/Image/profile1.png'), // Your profile image
            rating: 5.0,
            time: '11 months ago',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        },
    ];

    const RenderItem = ({ item }: any) => (
        <View style={{ padding: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={tik} style={{ height: 20, width: 20, position: "absolute", zIndex: 1, alignSelf: "flex-end", left: 25 }} />
                <Image source={profile} style={{ height: 40, width: 40, borderRadius: 50, }} />
                <Text style={[Typography.samll_bold, { color: 'black', letterSpacing: 0 }]}>
                    {item.name}
                </Text>
            </View>
            <View style={{ position: 'absolute', padding: 10, alignSelf: 'flex-end', gap: 3 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, alignSelf: 'flex-end' }}>
                    <Image source={star} style={{ height: 19, width: 19, alignSelf: "flex-end" }} />
                    <Text style={[Typography.samll_bold, { textAlign: 'right', color: 'black' }]}>
                        {item.rating.toFixed(1)}
                    </Text>
                </View>
                <Text style={[Typography.tab, { color: "#797979" }]}>{item.time}</Text>
            </View>
            <Text style={[Typography.title, { marginTop: 15, color: "#797979" }]}>
                {item.message}
                <Text style={{ color: Color.orange, fontSize: FontSize.Font16 }}> Reply</Text>
            </Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 15 }} />
        </View>
    );


    return (
        <View style={{ marginBottom: 30, padding: 10 }}>
            <View style={styles.tab}>
                {tab.map((item, index) => (
                    <Pressable onPress={() => setSeletedIndex(index)} style={{ borderWidth: 1, borderColor: Color.border, padding: 7, backgroundColor: seletedindex == index ? Color.orange : Color.white, borderRadius: 50, paddingHorizontal: 20 }}>
                        <Text style={[Typography.smallTitle, { color: seletedindex == index ? Color.white : Color.black, letterSpacing: 0 }]}>{item}</Text>
                    </Pressable>
                ))}
            </View>
            <View  style={{borderBottomWidth : 1 , borderBottomColor: "#080B111A", marginTop: scale(15), marginBottom: 10}}/>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item.id}
            />
            <View>
                <TextInput placeholder='Make a Comment' />
            </View>
        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    tab: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    }
})
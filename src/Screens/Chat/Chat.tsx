// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ChatScreen = () => {
//   return (
//     <View>
//       <Text>Chat</Text>
//     </View>
//   )
// }

// export default ChatScreen

// const styles = StyleSheet.create({})

import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Color } from '../../Theme';
import { moderateScale, scale } from '../../Theme/ResposiveSize';
import { FontSize } from '../../Theme/FontSize';
import { Typography } from '../../Theme/Typography';
import Acceptees from './Acceptees';
import Interests from './Interests';
import Calls from './Calls';


const ChatStatus = [
    {
        id: 1,
        UserName: 'User1',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 2,
        UserName: 'User2',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 3,
        UserName: 'User3',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 4,
        UserName: 'User4',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 5,
        UserName: 'User5',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 6,
        UserName: 'User6',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 7,
        UserName: 'User7',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
    {
        id: 8,
        UserName: 'User8',
        ShowImage: require('../../assets/Image/profile1.png'),
    },
];


const ChatScreen = () => {
    const [selectedTab, setSelectedTab] = useState('Acceptees');

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Acceptees':
                return <Acceptees />;
            case 'Calls':
                return <Calls />;
            case 'Interests':
                return <Interests />;
            default:
                return null;
        }
    };

    const renderTabButton = (tabName: string) => (
        <Pressable
            style={[styles.tabButton, selectedTab === tabName && styles.activeTab]}
            onPress={() => setSelectedTab(tabName)}>
            <Text style={[styles.tabText, selectedTab === tabName && styles.activeTabText]}>{tabName}</Text>
        </Pressable>
    );

    const renderItem = ({ item }: any) => (
        <View style={{ alignItems: 'center', marginRight: moderateScale(13) }}>
            <View style={styles.imageContainer}>
                <Image source={item.ShowImage} style={styles.StatusImage} />
                <View style={styles.statusDot} />
            </View>
            <Text style={[Typography.small, { fontSize: FontSize.Font14, color: Color.black, marginTop: 5 }]}>{item.UserName}</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ padding: moderateScale(16) }}>
                <Text style={[Typography.large_headings, { fontSize: FontSize.Font24 }]}>Online Matches (22)</Text>
                <Text style={[Typography.small, { fontSize: FontSize.Font14, color: Color.chatBg }]}>Initiate a chat with your matches to get faster response.</Text>
            </View>

            <View>
                <FlatList
                    data={ChatStatus}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: moderateScale(16) }}
                />
            </View>

            {/* Tab Navigation */}
            <View style={styles.tabContainer}>
                {renderTabButton('Acceptees')}
                {renderTabButton('Interests')}
                {renderTabButton('Calls')}
            </View>

            {/* Tab Content */}
            {renderTabContent()}

        </SafeAreaView>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    StatusImage: {
        height: scale(55),
        width: scale(55),
        borderRadius: scale(50),
    },
    imageContainer: {
        position: 'relative',
    },
    statusDot: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#39CF23',
        borderWidth: 2,
        borderColor: '#39CF23',
    },
    tabContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        // paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(16),
        borderBottomWidth: 1,
        borderColor: Color.border,
    },
    tabButton: {
        padding: moderateScale(10),
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: Color.orange,
    },
    tabText: {
        fontSize: FontSize.Font18,
        color: Color.chatBg,
    },
    activeTabText: {
        color: Color.orange,
        fontWeight: 'bold',
    },
});
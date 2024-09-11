// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const BookPooja = () => {
//   return (
//     <View>
//       <Text>BookPooja</Text>
//     </View>
//   )
// }

// export default BookPooja

// const styles = StyleSheet.create({})

import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';

import RightArrow from 'react-native-vector-icons/AntDesign';
import { Typography } from '../../Theme/Typography';
import { scale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { FontSize } from '../../Theme/FontSize';
import BackHeader from '../../Component/Header/BackHeader';


const poojas = [
  {
    id: '1',
    dateNumber: '09',
    month: 'Oct',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '09 Sep',
  },
  {
    id: '2',
    dateNumber: '15',
    month: 'Oct',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '15 Oct',
  },
  {
    id: '3',
    dateNumber: '21',
    month: 'Oct',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '21 Oct',
  },
  {
    id: '4',
    dateNumber: '31',
    month: 'Nov',
    poojaTitle: 'Durga Maa Poojan',
    poojaDate: '32 Nov',
  },
];

const tab = [
  {name: "All", icon: require('../../assets/Image/love.png')},
  {name: "Love", icon: require('../../assets/Image/love.png')},
  {name: "Marriage", icon: require('../../assets/Image/marriageicon.png')},
  {name: "Carrier", icon: require('../../assets/Image/carrier.png')},
]

const BookPooja = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const scrollRef = useRef(null);
  const PoojaImage = require('../../assets/Image/BookPooja.jpg');


  const handlePress = (name: string) => {
    setSelectedTab(name); 
  };
  const renderPoojaItem = ({ item, index }: any) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>

      <View style={{ alignSelf: "center", alignItems: "center", marginRight: 5 }}>
        <Text style={[styles.DateNumber, Typography.smallTitle]}>{item.dateNumber}</Text>
        <Text style={[styles.month, Typography.small]}>{item.month}</Text>
        {/* <View style={[styles.VerticalLine, { height: scale(80) }]}></View> */}
      </View>

      <View style={{ flexDirection: 'column', justifyContent: "space-between", backgroundColor: Color.inputBg, borderRadius: 8, marginLeft: 5 }}>
        <Image source={PoojaImage} style={styles.PoojaImage} />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginLeft: 15, marginVertical: 8 }}>
          <View style={{ flexDirection: 'column', justifyContent: "space-between", alignItems: "flex-start", }}>
            <Text style={[styles.DurgaMa, Typography.smallTitle]}>{item.poojaTitle}</Text>
            <Text style={[styles.month, Typography.small]}>{item.poojaDate}</Text>
          </View>
          <Pressable style={{ marginRight: 15, alignSelf: "center" }}>
            <RightArrow name='arrowright' size={24} color={Color.orange} />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <BackHeader centerTitle='Book a Pooja' />
      <View style={{ padding: scale(16) }}>
      <ScrollView
      horizontal={true} 
      showsHorizontalScrollIndicator={false} 
      ref={scrollRef} 
      contentContainerStyle={styles.scrollContainer}
    >
      {tab.map((item, index) => (
        <TouchableOpacity  onPress={() => handlePress(item.name)} key={index} style={[styles.tabItem, {backgroundColor: selectedTab === item.name ? Color.orange :  Color.white}]}>
         <Image
            source={item.icon}
            resizeMode='contain'
            style={[
              styles.icon,
              {
                tintColor: selectedTab === item.name ? Color.white :  Color.orange, 
              },
            ]}
          />
          <Text style={[Typography.samll_bold, {color: selectedTab === item.name ? Color.white :  Color.orange}]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
        <FlatList
          data={poojas}
          renderItem={renderPoojaItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default BookPooja;

const styles = StyleSheet.create({
  DateNumber: {
    backgroundColor: Color.orange,
    borderRadius: 50,
    color: Color.white,
    fontSize: FontSize.Font14,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  month: {
    fontSize: FontSize.Font10,
  },
  PoojaImage: {
    height: scale(170),
    width: scale(295),
    borderTopLeftRadius: scale(8),
    borderTopRightRadius: scale(8),
  },
  DurgaMa: {
    color: Color.black,
    fontSize: FontSize.Font16,
  },
  VerticalLine: {
    width: 1.5,
    backgroundColor: Color.orange,
    marginVertical: scale(4),
  },
  scrollContainer: {
    flexDirection: "row", 
  },
  tabItem: {
    flexDirection: "row", 
    alignItems: "center", 
    padding: 7,
    paddingHorizontal: 10,
    marginBottom: 15,
    marginRight: 7,
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: Color.orange, 
  },
  icon: {
    width:  scale(18), 
    height: scale(18), 
    marginRight: 5, 
    
  },
});
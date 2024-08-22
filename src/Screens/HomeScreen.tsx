import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Color } from '../Theme'
import HeaderCard from '../Component/Header/HeaderCard'
import { moderateScale } from '../Theme/ResposiveSize'
import { Typography } from '../Theme/Typography'
import { FontSize } from '../Theme/FontSize'
import YourMatches from '../Component/Cards/YourMatches'
import CategoryCard from '../Component/Cards/CategoryCard'
import FamousAstrologers from '../Component/Cards/FamousAstrologers'
import SuggestedMatches from '../Component/Cards/SuggestedMatches'

const HomeScreen = () => {
  const [selected, setSelected] = useState(0);
  const scrollViewRef = useRef(null);


  const handlePress = (index: any) => {
    setSelected(index);
    // Scroll to the selected item if necessary
    scrollViewRef.current?.scrollTo({ x: index * 100, animated: true });
  };


  return (
    <SafeAreaView style={{ backgroundColor: Color.white, flex: 1 }}>
      <HeaderCard />
      <ScrollView showsHorizontalScrollIndicator={false}>

     
      <View style={{ padding: 10 }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.container}>
            {['Brodata', 'Not viewed', 'Shortlisted', 'Viewed', 'Not Interested'].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.textContainer,
                  selected === index && styles.selectedTextContainer
                ]}
                onPress={() => handlePress(index)}
              >
                <Text style={[Typography.small, { fontSize: selected === index ? FontSize.Font15 : FontSize.Font13, color: selected === index ? Color.white : Color.black }]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <YourMatches />
        <CategoryCard />
        <FamousAstrologers />
        <SuggestedMatches />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#F6F6F6",
    height: moderateScale(48),
    borderRadius: 6,
    alignItems: 'center',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: moderateScale(7),
    height: moderateScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  selectedTextContainer: {
    backgroundColor: '#FF5A60',
    height: moderateScale(48),
    width: moderateScale(81),
    borderRadius: 6,
  },

})
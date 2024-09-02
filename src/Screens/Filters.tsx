import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../Theme'
import { moderateScale } from '../Theme/ResposiveSize'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Typography } from '../Theme/Typography';
import CustomDropdown from '../Component/Dropdowns/Dropdown';
import AgeRange from '../Component/Filters/AgeRange';
import LocationSearch from '../Component/Filters/LocationSearch';
import { navigationRef } from '../Navigator/Utils';

interface IFilter {
  ApplyFilter?: Function
}
const Filters = (Props: IFilter) => {

  const religion = [
    { label: 'Hindu', value: 'Hindu' },
    { label: 'Christianity', value: 'Catholicism' },
    { label: 'Catholicism', value: 'Catholicism' },
  ]

  const [religions, setReligions] = useState("")
  const [caste, setCaste] = useState("")
  const [education, setEducation] = useState("")
  const [smoking, setSmoking] = useState("")
  const [drinking, setDrinking] = useState("")


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
    
      <View style={styles.container}>
        <View style={styles.header_container}>
          <View style={{ marginTop: moderateScale(50), marginHorizontal: moderateScale(10), flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Ionicons name="close-sharp" size={30} color={Color.black} onPress={() =>  navigationRef.goBack()} />
            <Text style={Typography.large_headings}>Filters</Text>
            <Text onPress={() => Props.ApplyFilter ? Props.ApplyFilter() : null} style={[Typography.small, styles.apply_btn]}>Apply Filters</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: moderateScale(10), paddingVertical: 15 }}>
          <Text style={[Typography.title, { color: Color.chatBg }]}>Applied Filters</Text>
          <Text style={[Typography.title, { color: Color.orange }]}>Clear All</Text>
        </View>
        <ScrollView style={{marginBottom: "40%"}} showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: moderateScale(10), gap: 15 }}>
          <CustomDropdown
            placeholder='seleted Religion'
            title='By Religion'
            items={religion}
            selectedValue={religions}
            onSelect={setReligions}
          />
          <CustomDropdown
            placeholder=' seleted Caste'
            title='By Caste'
            items={religion}
            selectedValue={caste}
            onSelect={setCaste}
          />
           <CustomDropdown
            placeholder=' seleted Education'
            title='By Education'
            items={religion}
            selectedValue={education}
            onSelect={setEducation}
          />
           <CustomDropdown
            placeholder='seleted Smoking'
            title='Do Smoking'
            items={religion}
            selectedValue={smoking}
            onSelect={setSmoking}
          />
           <CustomDropdown
            placeholder='seleted Drinking'
            title='Do Drinking'
            items={religion}
            selectedValue={drinking}
            onSelect={setDrinking}
          />
          <AgeRange />
          <LocationSearch />
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Filters

const styles = StyleSheet.create({
  container: {
  },
  header_container: {
    backgroundColor: Color.white,
    height: moderateScale(100),
    elevation: 5,
  },
  apply_btn:
  {
    position: "absolute",
    right: 0,
    backgroundColor: Color.orange,
    padding: 10,
    color: Color.white,
    borderRadius: 35,
  }
})
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { Typography } from '../../Theme/Typography'
import { moderateScale } from '../../Theme/ResposiveSize'
import NameInput from '../../Component/Placeholder/NameInput'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import InputDropdown from '../../Component/Dropdowns/InputDropdown'
import Button from '../../Component/Buttons/Button'

const FamilyDetails = () => {

  const [name, setName] = useState("")
  const [caste, setCaste] = useState("")
  const [selected, setSelected] = useState(null);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Family Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <NameInput
              placeholder='Enter Father Name'
              title='Father Name'
              nameStyle
            />
            <NameInput
              placeholder='Enter Mother Name'
              title='Mother Name'
              nameStyle
            />
            <InputDropdown
              placeholder='0'
              title='No. of siblings'
              nameStyle
            />
            <NameInput
              placeholder='Father job details'
              title='Father Profession'
              nameStyle
            />
            <NameInput
              placeholder='Mother job details'
              title='Mother Profession'
              nameStyle
            />
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default FamilyDetails

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10)
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  btn: {
    margin: moderateScale(10),
    marginVertical: moderateScale(25)
  }
})
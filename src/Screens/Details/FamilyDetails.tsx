import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import NameInput from '../../Component/Placeholder/NameInput'
import Button from '../../Component/Buttons/Button'
import InputDropdown from '../../Component/Dropdowns/InputDropdown'

const FamilyDetails = () => {

  const items = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },

  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={Typography.main_heading}>Family Details</Text>
          <View style={styles.content}>
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
            <InputDropdown placeholder='0' title='No. of siblings' />
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
        </ScrollView>
        <Button title='SAVE' mainStyle={styles.btn} />
      </View>
    </SafeAreaView>
  )
}

export default FamilyDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    marginTop: moderateScale(20),
    gap: moderateScale(20),
  },
  btn: {
    marginBottom: moderateScale(10),
  },
})
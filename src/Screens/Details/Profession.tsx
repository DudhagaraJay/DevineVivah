import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import BackHeader from '../../Component/Header/BackHeader'
import { moderateScale } from '../../Theme/ResposiveSize'
import { Typography } from '../../Theme/Typography'
import CustomDropdown from '../../Component/Dropdowns/Dropdown'
import NameInput from '../../Component/Placeholder/NameInput'
import Button from '../../Component/Buttons/Button'

const Profession = () => {

  const items = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },

  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <View style={styles.container}>
        <Text style={Typography.main_heading}>Personal Details</Text>
        <View style={styles.content}>
          <CustomDropdown
            title='Currently Working?'
            placeholder='Yes'
            items={items}
          />
          <NameInput
            placeholder='Enter your skill'
            title='Your Skill'
            nameStyle
          />
            <NameInput
            placeholder='Enter your office name'
            title='Offce Name'
            nameStyle
          />
            <NameInput
            placeholder='Yearly Salary'
            title='Enter your yearly salary'
            nameStyle
            keyboardType="numeric"
          />
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </View>
    </SafeAreaView>
  )
}

export default Profession

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
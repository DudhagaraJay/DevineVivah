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

const PersonalDetails = () => {

  const [name, setName] = useState("")
  const [caste, setCaste] = useState("")
  const [selected, setSelected] = useState(null);


  const items = [
    { label: 'Religion 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={Typography.main_heading}>Personal Details</Text>
          <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
            <NameInput
              placeholder='Enter your Name'
              title='Your Name'
              value={name}
              onChangeText={setName}
              nameStyle />
            <CustomDropdown
              items={items}
              selectedValue={selected}
              onSelect={(item: any) => setSelected(item)}
              placeholder='Select Religion'
              title='Your Religion'
            />
            <CustomDropdown
              items={items}
              selectedValue={caste}
              onSelect={(item: any) => setCaste(item)}
              placeholder='Select Caste'
              title='You Caste'
            />
            <InputDropdown
              placeholder='0'
              title='No. of siblings'
              nameStyle
            />
            <InputDropdown
              placeholder='0'
              title='Your Height(cm)'
              nameStyle
            />
             <InputDropdown
              placeholder='0'
              title='Your Weight(Kg)'
              nameStyle
            />
          </View>
        </View>
        <Button title='SAVE' mainStyle={styles.btn} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default PersonalDetails

const styles = StyleSheet.create({
  container: {
    margin: moderateScale(10)
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  btn:{
    margin: moderateScale(10),
    marginVertical: moderateScale(25)
  }
})
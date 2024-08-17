// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import BackHeader from '../../Component/Header/BackHeader'
// import { Color } from '../../Theme'
// import { Typography } from '../../Theme/Typography'
// import { moderateScale } from '../../Theme/ResposiveSize'
// import CustomDropdown from '../../Component/Dropdowns/Dropdown'
// import NameInput from '../../Component/Placeholder/NameInput'
// import Button from '../../Component/Buttons/Button'

// const Education = () => {
//   const [studying, setStudying] = useState("")

//   const Studying = [
//     { label: 'Yes', value: 'yes' },
//     { label: 'No', value: 'no' },
//   ]

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
//       <BackHeader />
//       <View style={styles.container}>
//         <Text style={Typography.main_heading}>Education Details</Text>
//         <View style={{ marginTop: moderateScale(20), gap: moderateScale(20) }}>
//           <CustomDropdown
//             placeholder='Yes'
//             title='Currently Studying?'
//             items={Studying}
//             onSelect={setStudying}
//             selectedValue={studying}
//           />
//           <CustomDropdown
//             placeholder='University'
//             title='Education Level'
//             items={Studying}
//             onSelect={setStudying}
//             selectedValue={studying}
//           />
//           <NameInput
//            placeholder='Enter your Institute name'
//            title='Select Institute'
//            nameStyle
//             />
//         </View>
//         <Button title='SAVE' mainStyle={styles.btn} />
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Education

// const styles = StyleSheet.create({
//   container: {
//     margin: moderateScale(10)
//   },
//   btn:{
 
//   }
// })

import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import BackHeader from '../../Component/Header/BackHeader';
import CustomDropdown from '../../Component/Dropdowns/Dropdown';
import NameInput from '../../Component/Placeholder/NameInput';
import Button from '../../Component/Buttons/Button';


const EducationDetails = () => {
  const [studying, setStudying] = React.useState(null);

  const Studying = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <BackHeader />
      <View style={styles.container}>
        <Text style={Typography.main_heading}>Education Details</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <CustomDropdown
            placeholder='Yes'
            title='Currently Studying?'
            items={Studying}
            onSelect={setStudying}
            selectedValue={studying}
          />
          <CustomDropdown
            placeholder='University'
            title='Education Level'
            items={Studying}
            onSelect={setStudying}
            selectedValue={studying}
          />
          <NameInput
            placeholder='Enter your Institute name'
            title='Select Institute'
            nameStyle
          />
        </View>
        </ScrollView>
        <Button title='SAVE' mainStyle={styles.btn} />
      </View>
    </SafeAreaView>
  );
};

export default EducationDetails;

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
});

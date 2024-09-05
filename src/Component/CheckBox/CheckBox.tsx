import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckBox = ({ label, checked, onChange }: any) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onChange}>
      <View style={styles.checkbox}>
        {checked && <View style={styles.square} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View style={styles.container}>
      <CustomCheckBox
        // label="Check me!"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      {/* <Text style={styles.text}>
        {isChecked ? "Checked!" : "Not checked."}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf:"center"
  },
  checkboxContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 20,
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 1.5,
    borderColor: '#FF5A60',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    position: 'relative',
  },
  square: {
    width: 16,
    height: 16,
    borderRadius: 2,
    backgroundColor: '#FF5A60',
    position: 'absolute',
  },
  label: {
    marginLeft: 8,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
});

export default CheckBox;

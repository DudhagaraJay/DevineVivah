import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

const Interests = () => {
  const [value, setValue] = useState(24); // Initial value of the slider

  // Get the width of the slider container
  const { width: screenWidth } = Dimensions.get('window');
  const sliderWidth = screenWidth * 0.8;

  // Calculate the tooltip position
  const calculateTooltipPosition = (value) => {
    const percentage = (value - 18) / (40 - 18);
    return percentage * sliderWidth;
  };

  const tooltipPosition = calculateTooltipPosition(value);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Value: {value}</Text>
        <View style={[styles.tooltip, { left: tooltipPosition }]}>
          <Text style={styles.tooltipText}>{value}</Text>
        </View>
        {/* <Slider
          style={styles.slider}
          minimumValue={18}
          maximumValue={40}
          step={1}
          value={value}
          onValueChange={(val) => setValue(val)}
          minimumTrackTintColor="#FF5A60"
          maximumTrackTintColor="#FAFAFA"
          thumbTintColor="#FF5A60"
        /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sliderContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  tooltip: {
    position: 'absolute',
    bottom: 50, // Adjust this value to position the tooltip above the slider
    backgroundColor: '#FF5A60',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Interests;

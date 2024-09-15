import React, { useState } from 'react';
import { View, Text, PanResponder, StyleSheet } from 'react-native';
import { Color } from '../../Theme';
import { Typography } from '../../Theme/Typography';
import { FontSize } from '../../Theme/FontSize';
import { scale } from '../../Theme/ResposiveSize';

const AgeRange = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [value, setValue] = useState(18);
  const [thumbX, setThumbX] = useState(0);

  console.log("value", value)
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newX = Math.max(0, Math.min(gestureState.dx + thumbX, sliderWidth));
      setThumbX(newX);
      const newValue = Math.round(18 + ((40 - 18) * newX) / sliderWidth);
      setValue(newValue);
    },
    onPanResponderRelease: () => {
      const finalValue = Math.round(18 + ((40 - 18) * thumbX) / sliderWidth);
      setValue(finalValue);
    },
  });

  return (
    <View style={styles.container}>

      <Text style={[styles.ageRangeText, Typography.smallTitle]}>Age Range</Text>

      <View style={styles.slider} onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)} >
        <View style={[styles.track, { width: thumbX }]} />
        <View style={[styles.thumb, { left: thumbX - 7.5 }]}   {...panResponder.panHandlers} />
      </View>
      
      <View style={styles.rangeLabels}>
        <Text style={[styles.rangeText, Typography.smallTitle]}>18</Text>
        <View style={[styles.valueLabel, { left: thumbX - 9 }]}>
          <Text style={[styles.rangeText, Typography.smallTitle]}>{value}</Text>
        </View>
        <Text style={[styles.rangeText, Typography.smallTitle]}>40</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.chatBg,
    borderRadius: 8,
    padding: scale(16),
  },
  slider: {
    height: 5,
    justifyContent: 'center',
    backgroundColor: Color.inputBg,
    borderRadius: 20,
    marginVertical: scale(15),
  },
  track: {
    position: 'absolute',
    height: scale(5),
    backgroundColor: '#FF5A60',
    borderRadius: 5,
  },
  thumb: {
    position: 'absolute',
    width: scale(16),
    height: scale(16),
    backgroundColor: '#FF5A60',
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: Color.black,
    // padding: 7,
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rangeText: {
    fontSize: FontSize.Font16,
    color: Color.black,
  },
  ageRangeText: {
    fontSize: FontSize.Font16,
    color: Color.chatBg,
  },
  valueLabel: {
    position: 'absolute',
  },
});

export default AgeRange;

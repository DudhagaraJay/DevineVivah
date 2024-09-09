// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { Color } from '../../Theme'
// import BackHeader from '../../Component/Header/BackHeader'
// import { Typography } from '../../Theme/Typography'
// import { moderateScale } from '../../Theme/ResposiveSize'

// const SelectInterests = () => {

//     const data = [
//         {
//             id: 1,
//             title: "Reading"
//         },
//         {
//             id: 2,
//             title: "Photography"
//         },
//         {
//             id: 3,
//             title: "Gaming"
//         },
//         {
//             id: 4,
//             title: "Music"
//         },
//         {
//             id: 5,
//             title: "Travel"
//         },
//         {
//             id: 6,
//             title: "Painting"
//         },
//         {
//             id: 7,
//             title: "Politics"
//         },
//         {
//             id: 8,
//             title: "Charity"
//         },
//         {
//             id: 9,
//             title: "Cooking"
//         },
//         {
//             id: 10,
//             title: "Pets"
//         },
//         {
//             id: 11,
//             title: "Fashion"
//         },
        
//         {
//             id: 12,
//             title: "Sports"
//         },
        
//     ]

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: Color.white}}>
//         <BackHeader />
//         <View style={{padding: 16}}>
//         <Text style={[Typography.main_heading,{textAlign: "center"}]}>Education Details</Text>
//         <Text style={[styles.text, Typography.body]}>Tell us what piques your curiosity and passions</Text>

//         </View>
    
//     </SafeAreaView>
//   )
// }

// export default SelectInterests

// const styles = StyleSheet.create({
//     text: {
//         marginTop: moderateScale(20),
//         color: Color.chatBg,
//         textAlign: "center"
//     },
// })
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { moderateScale } from '../../Theme/ResposiveSize';
import { Color } from '../../Theme';

const data = [
  { id: 1, title: "Reading" },
  { id: 2, title: "Photography" },
  { id: 3, title: "Gaming" },
  { id: 4, title: "Music" },
  { id: 5, title: "Travel" },
  { id: 6, title: "Painting" },
  { id: 7, title: "Politics" },
  { id: 8, title: "Charity" },
  { id: 9, title: "Cooking" },
  { id: 10, title: "Pets" },
  { id: 11, title: "Fashion" },
  { id: 12, title: "Sports" },
];

const SelectInterests = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const renderRow = (items: any[], isEvenRow: boolean) => {
    return (
      <View style={styles.row}>
        {items.map(item => {
          const isSelected = selectedItems.includes(item.id);
          const itemStyle = isSelected ? styles.selectedItem : styles.item;
          const textStyle = isSelected ? styles.selectedText : styles.text;

          return (
            <TouchableOpacity
              key={item.id}
              style={[itemStyle, isEvenRow ? styles.twoColumn : styles.threeColumn]}
              onPress={() => toggleSelectItem(item.id)}
              onLongPress={() => toggleSelectItem(item.id)}
              delayLongPress={200}
            >
              <Text style={textStyle}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const groupDataIntoRows = () => {
    let rows = [];
    let currentIndex = 0;

    while (currentIndex < data.length) {
      // Check if it's an even row (0th, 2nd, 4th, etc.)
      const isEvenRow = rows.length % 2 === 0;
      const numColumns = isEvenRow ? 2 : 3;

      rows.push(data.slice(currentIndex, currentIndex + numColumns));
      currentIndex += numColumns;
    }

    return rows;
  };

  const groupedData = groupDataIntoRows();

  return (
    <ScrollView style={{ marginTop: 40 }}>
      {groupedData.map((row, index) => renderRow(row, index % 2 === 0))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateScale(10),
  },
  twoColumn: {
    width: '48%', // Adjust width to allow 2 columns to fit
  },
  threeColumn: {
    width: '30%', // Adjust width to allow 3 columns to fit
  },
  item: {
    backgroundColor: Color.inputBg,
    height: moderateScale(118),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(5), // Adjust margin for spacing
  },
  selectedItem: {
    backgroundColor: '#FF5A60',
    height: moderateScale(118),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
  },
  text: {
    color: Color.black,
    textAlign: 'center',
  },
  selectedText: {
    color: Color.white,
    textAlign: 'center',
  },
});

export default SelectInterests;

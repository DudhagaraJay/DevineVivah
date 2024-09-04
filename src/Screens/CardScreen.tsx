import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../Theme'

const CardScreen = ({route}: any) => {
    const { item } = route.params

console.log("card add item=>>>>", item)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.white,}}>
      <View style={ {marginTop: 40}}>

      </View>
      <Text>CardScreen</Text>
    </SafeAreaView>
  )
}

export default CardScreen

const styles = StyleSheet.create({})
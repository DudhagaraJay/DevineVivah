import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../Theme'
import ShippingAddressCard from '../../Component/Shipping/ShippingAddressCard'
import BackHeader from '../../Component/Header/BackHeader'

const Checkout = () => {
  return (
    <SafeAreaView style={{backgroundColor: Color.white, flex: 1, }}>
        <StatusBar backgroundColor={Color.white} barStyle={'dark-content'} />
        <BackHeader />
        <View style={{margin: 15}}>
       <ShippingAddressCard/>

        </View>
    </SafeAreaView>
  )
}

export default Checkout

const styles = StyleSheet.create({})
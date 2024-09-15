import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Application from './src/Navigator/Application'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  
  useEffect(() => {
    if (Platform.OS === 'android')
      SplashScreen.hide();
  }, []);


  return (
    <Application />
  )
}

export default App

const styles = StyleSheet.create({})
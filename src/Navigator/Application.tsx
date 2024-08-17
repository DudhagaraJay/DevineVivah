import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


// Screens
import Login from '../Screens/Login';
import { navigationRef } from './Utils';
import CreationSteps from '../Screens/CreationSteps';
import PersonalDetails from '../Screens/Details/PersonalDetails';
import Education from '../Screens/Details/Education';
import Profession from '../Screens/Details/Profession';
import FamilyDetails from '../Screens/Details/FamilyDetails';
import Preferences from '../Screens/Details/Preferences';
import Location from '../Screens/Details/Location';
import Verification from '../Screens/Details/Verification';



const Stack = createNativeStackNavigator();



const Application = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreationSteps" component={CreationSteps} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Profession" component={Profession} />
        <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Verification" component={Verification} />


        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Application

const styles = StyleSheet.create({})
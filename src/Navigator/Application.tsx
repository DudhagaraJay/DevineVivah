import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


// Screens
import { navigationRef } from './Utils';
import CreationSteps from '../Screens/CreationSteps';
import PersonalDetails from '../Screens/Details/PersonalDetails';
import Education from '../Screens/Details/Education';
import Profession from '../Screens/Details/Profession';
import FamilyDetails from '../Screens/Details/FamilyDetails';
import Preferences from '../Screens/Details/Preferences';
import Location from '../Screens/Details/Location';
import Verification from '../Screens/Details/Verification';
import SiblingDetails from '../Screens/Details/SiblingDetails';
import HomeScreen from '../Screens/HomeScreen';
import StoreScreen from '../Screens/StoreScreen';
import ChatesScreen from '../Screens/ChatesScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import MainNavigator from './BottomTab/Main';
import Filters from '../Screens/Filters';
import ViewProfile from '../Screens/ViewProfile';
import AstrologerProfileView from '../Screens/AstrologerProfileView';
import SelectCategory from '../Screens/SelectCategory';
import ProductView from '../Screens/ProductView';
import CardScreen from '../Screens/CardScreen';
import Login from '../Screens/Login/Login';
import ForgotPassword from '../Screens/Login/ForgotPassword';
import OTPVerification from '../Screens/Login/OTPVerification';
import CreactNewPassword from '../Screens/Login/CreactNewPassword';
import PasswordChangeSuccess from '../Screens/Login/PasswordChangeSuccess';



const Stack = createNativeStackNavigator();



const Application = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />
      <Stack.Screen name="CreactNewPassword" component={CreactNewPassword} />
      <Stack.Screen name="PasswordChangeSuccess" component={PasswordChangeSuccess} />






        <Stack.Screen name="CreationSteps" component={CreationSteps} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="Education" component={Education} />
        <Stack.Screen name="Profession" component={Profession} />
        <Stack.Screen name="FamilyDetails" component={FamilyDetails} />
        <Stack.Screen name="Preferences" component={Preferences} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="StoreScreen" component={StoreScreen} />
        <Stack.Screen name="ChatesScreen" component={ChatesScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="ViewProfile" component={ViewProfile} />
        <Stack.Screen name="AstrologerProfileView" component={AstrologerProfileView} />
        <Stack.Screen name="SelectCategory" component={SelectCategory} />
        <Stack.Screen name="ProductView" component={ProductView} />
        <Stack.Screen name="CardScreen" component={CardScreen} />






        <Stack.Screen name="Filters" component={Filters} />




      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Application

const styles = StyleSheet.create({})
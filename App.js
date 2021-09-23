//import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, ImageBackground, Text, View, SafeAreaView, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';
// import { useDeviceOrientation } from '@react-native-community/hooks';
// import { AppButton } from './components/button'
import { WelcomeScreen } from './app/screens/welcomeScreen'
import { ViewImageScreen } from './app/screens/viewImageScreen'


export default function App() {
  //const { landscape } = useDeviceOrientation();
  return (
    <WelcomeScreen></WelcomeScreen>
  );
}
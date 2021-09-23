import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View, SafeAreaView, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { AppButton } from './../components/button'

export const WelcomeScreen = () => {
  //const { landscape } = useDeviceOrientation();
  return (
    <ImageBackground
      source={require("../assets/welcomeBackground.jpg")}
      style={styles.container}>
      <SafeAreaView
        style={styles.iconContainer}>
        <Text style={{ color: 'white', fontSize: 27, fontFamily: 'Futura' }}>Done with it!</Text>
        <View style={{ padding: 20 }}>
          <Image
            source={require("../assets/welcomeIconColor.png")}
            style={styles.mainIcon}
          />
        </View>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Futura' }}>Sell What You Don't need</Text>
      </SafeAreaView>
      <SafeAreaView
        style={styles.actionsContainer}>
        <AppButton title="Login" size="350" backgroundColor="#f55a42" />
        <AppButton title="Register" size="350" backgroundColor="#4fcaff" />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 150
  },
  mainIcon: {
    width: 150,
    height: 150,
    padding: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  },
  actionsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
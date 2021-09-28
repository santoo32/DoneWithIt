import React from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView, Image } from 'react-native';
import AppText from '../components/appText';
import { AppButton } from '../components/button'

export const WelcomeScreen = () => {
  //const { landscape } = useDeviceOrientation();
  return (
    <ImageBackground
      source={require("../assets/welcomeBackground.jpg")}
      style={styles.container}>
      <SafeAreaView
        style={styles.iconContainer}>
        <AppText style={{ color: 'white', fontSize: 27 }} text={'Done with it!'}></AppText>
        <View style={{ padding: 20 }}>
          <Image
            source={require("../assets/welcomeIconColor.png")}
            style={styles.mainIcon}
          />
        </View>
        <AppText style={{ color: 'white', fontSize: 18 }} text={'Sell What You Dont need'}></AppText>
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
    width: '100%'
  }
});
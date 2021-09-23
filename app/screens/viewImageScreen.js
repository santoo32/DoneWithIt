import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground, Text, View, SafeAreaView, Button, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { AppButton } from './../components/button'

export const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={[styles.actionButtonContainer, { left: 30 }]}>
        <AppButton title="Close" backgroundColor="tomato" size="120"></AppButton>
      </SafeAreaView >
      <SafeAreaView style={[styles.actionButtonContainer, { right: 30 }]}>
        <AppButton title="Delete" backgroundColor="green" size="100"></AppButton>
      </SafeAreaView>
      <Image
        source={{ uri: 'https://picsum.photos/400/400' }}
        resizeMode="contain"
        style={styles.imageDisplay}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  actionButtonContainer: { position: 'absolute', top: 35 },
  imageDisplay: { width: '100%', height: '100%' }
});
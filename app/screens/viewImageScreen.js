import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';


export const ViewImageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={[styles.actionButtonContainer, { left: 30 }]}>
        <AntDesign name="closecircleo" size={30} color="white" />
      </SafeAreaView >
      <SafeAreaView style={[styles.actionButtonContainer, { right: 30 }]}>
        <Entypo name="trash" size={30} color="white" />
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
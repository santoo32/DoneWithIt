import React from 'react'
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import AppText from './appText';

function ProductDisplay({ image, title, subtitle }) {
  return (
    <TouchableOpacity
      style={styles.viewContainer}
    >
      <Image
        source={{
          uri: image
        }}
        resizeMode="cover"
        style={styles.productImage}
      />
      <View style={{ padding: 15 }}>
        <AppText style={styles.title} text={title}></AppText>
        <AppText style={styles.subtitle} text={subtitle}></AppText>
      </View>
    </TouchableOpacity >
  )
}


const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden',
    width: '95%'
  },
  productImage: { width: '100%', height: 200 },
  title: { fontSize: 24 },
  subtitle: { color: "green", fontSize: 20, fontWeight: 'bold' }
});

export default ProductDisplay;
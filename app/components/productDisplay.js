import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'

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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
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
  title: { fontFamily: 'Futura', fontSize: 20 },
  subtitle: { color: "green", fontSize: 20, fontWeight: 'bold' }
});

export default ProductDisplay;
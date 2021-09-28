import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import AppText from './appText'

export default function ListItem({ image, title, subtitle, onPress }) {
  return (
    <TouchableHighlight
      underlayColor={'#dbdbdb'}
      onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: image
          }}
          style={styles.image}>
        </Image>
        <View>
          <AppText text={title} style={styles.title}></AppText>
          <AppText text={subtitle} style={styles.subtitle}></AppText>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 15 },
  image: { width: 70, height: 70, borderRadius: 35, overflow: 'hidden', marginRight: 10 },
  title: { fontSize: 20, fontWeight: '500' },
  subtitle: { fontSize: 19, color: '#6e6969' }
})
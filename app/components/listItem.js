import React from 'react'
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import AppText from './appText'

export default function ListItem({ title, subtitle, onPress, containerStyle, image, imageStyles }) {
  return (
    <TouchableHighlight
      underlayColor={'#dbdbdb'}
      onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.imageContainer, containerStyle]}>
          {image && <Image
            source={image}
            style={[styles.image, imageStyles]}>
          </Image>}
        </View>
        <View>
          <AppText text={title} style={styles.title}></AppText>
          {subtitle ? <AppText text={subtitle} style={styles.subtitle}></AppText> : null}
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center'
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
  subtitle: {
    fontSize: 19,
    color: '#6e6969'
  }
})
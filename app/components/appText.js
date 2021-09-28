import React from 'react'
import { StyleSheet, Text, Platform } from "react-native";

export default function AppText({ style, text }) {
  return (
    <Text style={[styles.text, style]}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'Futura'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  }
})

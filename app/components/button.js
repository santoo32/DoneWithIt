import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";

export const AppButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    style={getButtonStyle(backgroundColor, size)}
    onPress={onPress}>
    <Text style={styles.textStyle}>
      {title}
    </Text>
  </TouchableOpacity>
);


const getButtonStyle = (color, size) => {
  return {
    paddingVertical: 20,
    width: parseInt(size) || '100%',
    backgroundColor: color,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: 'Futura'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  }
});

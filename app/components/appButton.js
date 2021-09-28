import React from 'react';
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from './appText';

export const AppButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    style={getButtonStyle(backgroundColor, size)}
    onPress={onPress}>
    <AppText style={styles.text} text={title}></AppText>
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
    fontSize: 18
  }
});

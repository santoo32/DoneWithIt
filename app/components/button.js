import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export const AppButton = ({ onPress, title, size, backgroundColor }) => (
  <View
    style={getButtonStyle(backgroundColor, size)}
    onPress={onPress}
  >
    <Text style={styles.textStyle}>
      {title}
    </Text>
  </View>
);


const getButtonStyle = (color, size) => {
  return {
    paddingVertical: 20,
    width: parseInt(size) || 170,
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
    fontFamily: 'Futura',
    fontSize: 18
  }
});

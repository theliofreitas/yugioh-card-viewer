import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonLogin = ({ onPress, title, color, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 224,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    // marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
  },
});

export default ButtonLogin;

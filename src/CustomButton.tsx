import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colorOrange} from '../App';

type CustomButton = {
  label: string;
  color: string;
};

const CustomButton: React.FC<CustomButton> = ({label}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.btn_Enter}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {marginVertical: 5},
  label: {
    color: colorOrange,
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn_Enter: {
    height: 48,
    backgroundColor: '#FF5B2D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default CustomButton;

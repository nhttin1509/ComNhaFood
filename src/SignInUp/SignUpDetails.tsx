import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colorOrange} from '../../App';

type SignUpDetails = {
  label: string;
  placeholder: string;
  isEmail?: boolean;
};

const SignUpDetails: React.FC<SignUpDetails> = ({
  label,
  placeholder,
  isEmail,
}) => {
  return (
    <View style={{marginVertical: 5}}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.textInput} />
      {isEmail && (
        <Text style={styles.register}> Register with phone number</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colorOrange,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 0.2,
    borderColor: '#D1D1D1',
    padding: 10,
    borderRadius: 5,
  },
  register: {
    color: colorOrange,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  },
});

export default SignUpDetails;

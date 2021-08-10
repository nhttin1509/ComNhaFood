import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../CustomButton';
import SignUpDetails from './SignUpDetails';
import {colorOrange} from '../../App';
const inputList = [
  {
    label: 'Name',
    placeholder: 'FullName',
  },
  {
    label: 'Mail',
    placeholder: 'abc@gmail.com',
    isEmail: true,
  },
  {
    label: 'Password',
    placeholder: '********',
  },
  {
    label: 'RetypePassWord',
    placeholder: '********',
  },
];

const ScreenSignUp: React.FC<SignUpDetails> = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.login_View}>
          <Text style={styles.text_Login}>SignUp</Text>
        </View>
        <View style={{margin: 50}}>
          {inputList.map((input, index) => (
            <SignUpDetails
              key={index}
              label={input.label}
              placeholder={input.placeholder}
              isEmail={input.isEmail}
            />
          ))}
          <View style={{marginTop:50}}>
             <CustomButton label={'Sign Up'} />
          </View>
        </View>
   
      </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  login_View: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_Login: {
    fontWeight: 'bold',
    fontSize: 50,
    color: colorOrange,
  },
});

export default ScreenSignUp;

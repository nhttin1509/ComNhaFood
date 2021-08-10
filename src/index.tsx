import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 100}>
        <View style={styles.login_View}>
          <Text style={styles.text_Login}>Login</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.enterPassSuggest}>Welcome!</Text>
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInputPassword} placeholder="Password" />
        <TouchableOpacity style={styles.btn_Enter}>
          <Text style={styles.btn_EnterText}> Enter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn_ForgetPW}>
          <Text style={styles.btn_ForgetPWText}> Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.container_column1}>
          <TouchableOpacity style={styles.item_column1}>
            <Text style={styles.btn_columnGoogle}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item_column1}>
            <Text style={styles.btn_columnFacebook}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_column2}>
          <View style={styles.item_column2}>
            <Text style={styles.text_SignUp}>Don't have an account?</Text>
          </View>
          <TouchableOpacity style={styles.item_column2}>
            <Text style={styles.btn_text_SignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    color: 'red',
  },
  login_View: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_Login: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FF5B2D',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  enterPassSuggest: {
    color: '#666769',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginTop: 48,
  },
  enterPassDescription: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '200',
    marginHorizontal: 20,
  },
  textInput: {
    height: 50,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#ECEDF1',
  },
  textInputPassword: {
    height: 50,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#ECEDF1',
    marginTop: 10,
  },
  btn_Enter: {
    height: 48,
    marginTop: 20,
    marginBottom: 0,
    margin: 20,
    backgroundColor: '#FF5B2D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btn_EnterText: {
    color: 'white',
  },
  btn_ForgetPW: {
    height: 48,
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_ForgetPWText: {
    color: '#FF5B2D',
  },
  container_column1: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
  },
  item_column1: {
    width: '50%',
    height: 48,
    margin: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ECEDF1',
  },
  btn_columnGoogle: {
    color: '#FF5B2D',
  },
  btn_columnFacebook: {
    color: '#45639F',
  },
  container_column2: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
  },
  item_column2: {
    height: 48,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text_SignUp: {
    color: '#C3C4C6',
  },
  btn_text_SignUp: {
    color: '#FF5B2D',
  },
});

export default LoginScreen;

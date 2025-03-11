import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const LoginScreen = () => {
  const {username} = useState ('');
  const {password} = useState ('');
  
  const onSubmit = () => {
    console.log('Test')

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <View style={styles.formContainer}>
        <Title />

        <Input label="Username" placeholder={'masukkan username'} />
        <Input label="Password" placeholder={'masukkan password'} />

        <Button label="Sign in " onPress={onSubmit}  />

        <Button label="Google" color="red" />
        <Button label="Facebook" color="blue" />
        <Button label="Apple" color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 50,
    color: '#7d3c98',
  },

  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

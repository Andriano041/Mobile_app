import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const Input = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20, // Tambahkan margin bottom di sini
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
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
});
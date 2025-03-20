import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components2/Title';
import Input from './components2/Input';
import Button from './components2/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = text => {
    // Memfilter hanya karakter angka
    const numericValue = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  const handleRegister = () => {
    console.log('Registration data:', {
      name,
      username,
      email,
      address,
      phoneNumber,
    });
    // Add your registration logic here
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />

      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />

      <Input
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />

      <Input
        label="Email"
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />

      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Register;

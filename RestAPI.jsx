import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data));
  }, []);

  return (
    <View>
      <Text style={styles.text}>RestAPI</Text>
      {users.map(item => (
        <Text style={{fontSize: 20}}>{item.name}</Text>
      ))}
    </View>
  );
};

export default RestAPI;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  item: {
    fontSize: 20,
  },
});

import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView>
        {users.map(user => (
          <View key={user.id} style={styles.userCard}>
            <Image 
              source={{uri: user.avatar}} 
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                {user.first_name} {user.last_name}
              </Text>
              <Text style={styles.userEmail}>
                {user.email}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
});
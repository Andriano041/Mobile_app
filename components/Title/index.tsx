import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    alignItems: 'center',
    marginBottom: 50,
    color: 'red',
  },
});

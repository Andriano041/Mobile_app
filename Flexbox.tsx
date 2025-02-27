import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.blueContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
      <View style={styles.redContainer} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly', //main exis
    alignItems: 'center', //cross axis
  },
  redContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      {/* Red header with squares */}
      <View style={styles.header}>
        <View style={styles.blackSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.blackSquare}></View>
      </View>

      {/* Middle section with logo and text */}
      <View style={styles.content}>
        <Image
          source={require('./assets/uk.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Blue footer with squares */}
      <View style={styles.footer}>
        <View style={styles.blackSquare}></View>
        <View style={styles.yellowSquare}></View>
        <View style={styles.blackSquare}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: 80,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footer: {
    height: 80,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  blackSquare: {
    width: 70,
    height: 70,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  yellowSquare: {
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 400,
    height: 400,
    marginBottom: 10,
  },
});

export default Exercise4;

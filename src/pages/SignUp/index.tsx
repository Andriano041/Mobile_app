import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {Arrowback} from '../../assets';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerRow}>
        <Arrowback style={styles.backIcon} />
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profilContainer}>
          <View style={styles.profil}>
            <View style={styles.add}>
              <Text style={styles.addLabel}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Gap height={20} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    color: 'red',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 43,
    paddingHorizontal: 24,

    backgroundColor: '#FFFFFF',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginLeft: 12,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  profilContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  profil: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  add: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
});

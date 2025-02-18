//1. import core component react-native
import Reach from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//2. Buat component
//   component adalah function yg return jsx
const App = () => {
  return (
    //jsx
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="Enter your Email" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>semangka</Text>
        <Image
          style={styles.img1}
          source={{
            uri: 'https://4kwallpapers.com/images/walls/thumbs_2t/12958.png',
          }}
        />
        <Text style={styles.subTitle}>Image From Local Directory</Text>
        <Image style={styles.img2} source={require('./assets/neo.png')} />
        <Text style={styles.subTitle}>Image From Base64</Text>
        <Image
          style={styles.img1}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </ScrollView>
    </>
  );
};
//3. export component
export default App;

//4. Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  img1: {
    height: 300,
    width: 300,
    marginLeft: 20,
  },
  img2: {
    marginLeft: 30,
    height: 533 / 3,
    width: 924 / 3,
  },

  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    padding: 25,
    fontSize: 25,
    borderRadius: 15,
  },

  button: {
    backgroundColor: 'red',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },

  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});

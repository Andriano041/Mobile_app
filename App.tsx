import {Text, View, StyleSheet} from 'react-native' 

const App = () => {
  return (
    //JSX
    <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.title}>basic react native</Text> 
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>learn to basic</Text> 
    </View>

    </View>
   
    
    
    
   
  )
}

export default App

//4. Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20
  },
  title: {
    fontSize: 50, 
    fontWeight: '800',
    color: 'white',
    textAlign: 'center'
    

    
  }
})
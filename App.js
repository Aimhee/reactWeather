import React , {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityInicator} from 'react-native';
import Weather from './components/Weather';

class App extends Component {
  state = {
    isLoaded:false
  };

  render(){
    const {isLoaded} = this.state;
    return(
      <View style={styles.container}>
        {isLoaded ? null : (
          <Weather/>
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(146,168,209)',
  },
  loading: {
    flex:1,
    backgroundColor:"rgb(146,168,209)",
    justifyContent:"flex-end",
    paddingLeft:25,
  },
  loadingText:{
    fontSize: 38,
    marginBottom:100,
  }
});

export default App;



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Bulbasaur, Charmander, Squirtle } from './icon';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Bulbasaur/>
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Charmander/>
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <Squirtle/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
  },
  boxContainer: {
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOne:{
    backgroundColor:'#FFEEE4'
  },
  boxTwo:{
    backgroundColor:'#F17F43'
  },
  boxThree:{
    backgroundColor:'#CE6D39'
  }
});


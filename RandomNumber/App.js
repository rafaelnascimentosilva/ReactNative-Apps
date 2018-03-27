import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title="Gerar número aleatório"
          color="green"
          onPress={RandomNumber}
        />
      </View>
    );
  }
}

const RandomNumber = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

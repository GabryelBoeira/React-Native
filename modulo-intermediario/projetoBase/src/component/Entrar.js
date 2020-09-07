import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Entrar extends Component {

  render() {
    return (
            <View style={styles.viewContainer}>
              <Text style={styles.text}>Seja Bem-vindo!</Text>
              <Button title="Sair" onPress={ this.props.fechar }/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    borderRadius: 15,
    height: 350, 
    backgroundColor: '#292929', 
    width:'100%', 
  }, 
  text: {
    paddingTop: 15, 
    fontSize: 28, 
    color: '#FFF', 
    textAlign:'center'
  }

})
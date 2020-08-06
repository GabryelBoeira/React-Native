import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{
  render(){
    return (
      <View style={{flex:1, flexDirection : 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: '#f00'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: '#e61'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: '#fde'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: '#000'}}></View>
      </View>
    );
  }
}

export default App;
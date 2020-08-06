import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{

  render(){
    return (
      <View style={{flex:1, backgroundColor: '#00f'}}>
          <View style={{width: 50, right:50, backgroundColor: '#f00'}}></View>
           <View style={{flex:1, backgroundColor: '#e61'}}></View>
           <View style={{flex:1, backgroundColor: '#fde'}}></View>
           <View style={{flex:1, backgroundColor: '#000'}}></View>
      </View>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';

class App extends Component{
  render(){
    return ( 
      <View style={{flex:1}}> 
        <View style={{flex:1, flexDirection : 'column', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 50, height: 50, backgroundColor: '#f00'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: '#e61'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: '#fde'}}></View>
          <View style={{width: 50, height: 50, backgroundColor: '#000'}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        </View>
        <View style={{flex:1, flexDirection : 'row',  justifyContent:'space-around'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
          <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
          <View style={{width: 100, height: 50, backgroundColor: 'green'}} />
          <View style={{height: 50, backgroundColor: 'blue'}} />
          <View style={{height: 50, backgroundColor: 'red'}} />
        </View>
      </View>    
    );
  }
}

export default App;
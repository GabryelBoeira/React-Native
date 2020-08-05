import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome : 'Gabryel'
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }

  render(){
    return (
      <View style={styles.styleView}>
        
        <Text style={[styles.areaPrincipal, styles.centerText]}>  texto 1 </Text>  
        <Text style={styles.centerText}>  texto 2 </Text>  
        <Text> texto 3 </Text>  
        <Text style={styles.areaPrincipal}>  texto 4 </Text>  

      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleView : {
    marginTop: 40
  },
  areaPrincipal : {
    fontSize : 40,
    color : '#f10'
  },
  centerText : {
    textAlign : 'center'
  }
});

export default App;
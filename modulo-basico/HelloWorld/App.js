import React, { Component } from 'react';
import { Text, View , TextInput, StyleSheet, Button } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: '',
    }

    this.entrar = this.entrar.bind(this);
  }
  
  entrar() {
    if(this.state.input === ''){
      return alert('Digite seu nome!');
    }
    this.setState({nome: `Bem Vindo ${this.state.input}`});
  }

  render(){
    return ( 
      <View style={styles.container}> 
        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={(texto) => this.setState({input: texto})} 
          underlineColorAndroid="transparent"/>
        
        <Button title="Entrar" onPress={this.entrar}></Button>
        <Text style={styles.texto}> {this.state.nome}</Text>
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});

export default App;
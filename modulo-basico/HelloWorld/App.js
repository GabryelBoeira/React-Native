import React, { Component } from 'react';
import { Text, View , TextInput, StyleSheet } from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
    }

    this.setNome = this.setNome.bind(this);
  }

  setNome(texto){
    if(texto.length > 0){
      this.setState({nome: `Bem Vindo ${texto}` });
    } else {
      this.setState({nome: ''});
    }
  }
  render(){
    return ( 
      <View style={styles.container}> 
        <TextInput 
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={this.setNome} 
          underlineColorAndroid="transparent"/>
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
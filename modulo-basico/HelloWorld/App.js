import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

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
      <View>
        <Button  title="Entrar" onPress={() => this.entrar('Gabryel J Boeira')} />
        <Text style={{color: '#efc123', fontSize: 25, margin: 15, textAlign: 'center'}}> 
          {this.state.nome}
        </Text>       
        
      </View>
    );
  }
}

export default App;
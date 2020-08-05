import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){
    let imagem = 'https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743160.jpg';
    
    return (
      <View>
        <Text style={{color: '#fff', fontSize: 25, margin: 15}}> 
          Hello World!
        </Text>       
        <Imagem imagem={imagem}/>
      </View>
    );
  }
}

class Imagem extends Component {
  render() {
    return (
      <Image 
        source={{uri: this.props.imagem }}
        style={{width: 300, height: 300}}
      />  
    );
  }
}
    
export default App;
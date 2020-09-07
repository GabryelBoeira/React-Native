import React, { Component } from 'react'
import { Pressable, Text, StyleSheet, View, TextInput, Keyboard} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      nome: ''
    };

    this.gravaNome = this.gravaNome.bind(this)
  }

  async componentDidMount() {
    await AsyncStorage.getItem('nome').then(nome => {
      this.setState({nome})
    })
  }

  async componentDidUpdate(_, prevState){
    let nome = this.state.nome
    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome)
    }
  }

  gravaNome() {
    this.setState({
      nome: this.state.input
    })
    alert('Salvo com Sucesso')
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.inputText}
            value={this.state.input}
            onChangeText={input => this.setState({input})}
            underlineColorAndroid={"transparent"}
            />
          <Pressable onPress={this.gravaNome}>
            <Text style={styles.button}> + </Text>
          </Pressable>
        </View>
        <Text style={styles.nome}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputText: {
    width: 340,
    marginLeft: 10,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000'
  },
  button: {
    height: 40,
    padding: 10,
    marginLeft: 4,
    color: '#fff',
    backgroundColor: '#000',
  },
  nome: {
    marginTop: 25,
    fontSize: 30,
    textAlign: 'center'
  }
});
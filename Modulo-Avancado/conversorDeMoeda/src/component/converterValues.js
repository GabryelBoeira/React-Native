import React, {Component} from 'react'
import {Text, StyleSheet, View, TextInput, Pressable, Keyboard} from 'react-native' 
import api from '../service/api'

export default class converterValues extends Component {
  
  state = {
    coinBValue: 0,
    converterValue: 0
  }
  
  converter = async (coinA, coinB) => {
    
    let from_to = `${coinA}_${coinB}`
    const response = await api.get(`convert?q=${from_to}&compact=ultra&apiKey=03d5689605dc0833ec84`)
    
    let quote = response.data[from_to]
    let totalQuote = (parseFloat(quote) * parseFloat(this.state.coinBValue))
    
    this.setState({converterValue: totalQuote.toFixed(2)})
    Keyboard.dismiss()
  }

  render() {
    const {coinA, coinB} = this.props
    return (
      <View style={styles.container}>

        <Text style={styles.title}> {coinA} para {coinB}</Text>

        <TextInput
          maxLength={10}
          style={styles.inputText}
          placeholder={"Valor a ser convertido"}
          onChangeText={(coinBValue) => this.setState({coinBValue})}
          keyboardType={'numeric'}
        />

        <Pressable style={styles.button} onPress={() => this.converter(coinA, coinB)}>
          <Text style={styles.buttonText}> Converter </Text>
        </Pressable>

        <Text style={styles.result}>{this.state.converterValue === 0? '': this.state.converterValue} </Text>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000'
  },
  inputText: {
    height: 45,
    width: 280,
    backgroundColor:'#ccc',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: '#000',
    borderRadius: 5
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#ffA100',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: "bold",
  },
  result: {
    fontSize: 25,
    color: '#000',
    fontWeight: "bold",
    marginTop: 15
  }
})

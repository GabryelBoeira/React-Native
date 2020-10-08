import React, {useState} from 'react';
import {Text, StyleSheet, View, Pressable, TextInput} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Lucas');
  const [input, setInput] = useState('');

  function alterarNome() {
    setNome(input);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Seu Nome...'}
        value={input}
        placeholderTextColor={'#000'}
        onChangeText={(texto) => setInput(texto)}
      />
      <Pressable style={styles.button} onPress={() => alterarNome()}>
        <Text style={styles.buttonText}> Alterar Nome</Text>
      </Pressable>
      <Text style={styles.text}> {nome} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignContent: 'center',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#222',
    marginLeft: '10%',
    marginRight: '10%',
    height: 30,
  },
  input: {
    marginLeft: '10%',
    marginRight: '10%',
    height: 40,
    borderRadius: 10,
    borderColor: '#4169e1',
    borderWidth: 2,
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
  },
});

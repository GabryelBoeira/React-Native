import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Pressable, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function alterarNome() {
    setNome(input);
    setInput('');
  }

  //didAmount
  useEffect(() => {
    async function getStorage() {
      let nomeSalvo = await AsyncStorage.setItem('nome', nome);
      if (nomeSalvo) setNome(nomeSalvo);
    }

    getStorage();
  }, []);

  //didUpdate
  useEffect(() => {
    async function setStorage() {
      await AsyncStorage.setItem('nome', nome);
    }
    setStorage();
  }, [nome]);

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

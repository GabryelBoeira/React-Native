/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function irSobre() {
    navigation.navigate('Sobre', {nome: 'usuario', email: 'usuario@email.com'});
  }

  return (
    <>
      <View style={styles.container}>
        <Text> Pagina inicial </Text>
      </View>
      <Button title={'Ir para Sobre!!!'} onPress={irSobre} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

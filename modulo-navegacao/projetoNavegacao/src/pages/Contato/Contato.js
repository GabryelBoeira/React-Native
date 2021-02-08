/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Contato(props) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text> Contato </Text>
      </View>
      <Button title={'Voltar para Sobre'} onPress={() => navigation.goBack()} />
      <Button
        title={'Voltar para Sobre'}
        onPress={() => navigation.dispatch(navigation.popToTop())}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

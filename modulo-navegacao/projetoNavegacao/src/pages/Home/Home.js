/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home() {
  const navigation = useNavigation();

  function irSobre() {
    navigation.navigate('Contato');
  }

  return (
    <View>
      <Text>Home</Text>

      <Button title={'Ir para Contato'} onPress={irSobre} />
    </View>
  );
}

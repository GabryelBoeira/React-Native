/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre(props) {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text> Sobre </Text>

        <Text> {props.route.params?.nome} </Text>
        <Text> {props.route.params?.email} </Text>
      </View>
      <Button
        title={'Voltar para Home'}
        onPress={() => navigation.navigate('Home')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

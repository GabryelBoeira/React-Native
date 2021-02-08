/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre(props) {
  const navigation = useNavigation();
  const [value, setValue] = React.useState(props.route.params.nome);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: ` Sobre: ${value}`,
    });
  }, [navigation, value]);

  return (
    <>
      <View style={styles.container}>
        <Text> Sobre </Text>
        <Text> {props.route.params?.nome} </Text>
        <Text> {props.route.params?.email} </Text>
      </View>
      <Button
        style={styles.padding}
        title={'Contato'}
        onPress={() => navigation.navigate('Contato')}
      />

      <Button
        style={styles.padding}
        title={'Voltar para Home'}
        onPress={() => navigation.goBack()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  padding: {padding: 20},
});

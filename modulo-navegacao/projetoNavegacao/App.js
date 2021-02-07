import React, {Component} from 'react';
import {Text, StyleSheet, View, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Utilizando Icons </Text>
        <FontAwesome name={`home`} size={30} color={`#000`} />
        <Feather name={`gift`} size={30} color={`#45E098`} />

        <Pressable style={styles.youTubePressable}>
          <Feather name={`youtube`} size={30} color={`#FFF`} />
          <Text style={styles.textPressable}>Acessar Canal</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: `center`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  youTubePressable: {
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  textPressable: {
    paddingLeft: 10,
    color: '#FFF',
  },
});

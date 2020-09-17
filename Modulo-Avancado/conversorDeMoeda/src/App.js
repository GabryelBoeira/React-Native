import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

import ConverterValues from './component/converterValues'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ConverterValues coinA={"USD"} coinB={"BRL"} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

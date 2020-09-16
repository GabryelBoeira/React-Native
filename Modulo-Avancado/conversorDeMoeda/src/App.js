import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import ConverterValues from './component/converterValues'
import api from './service/api'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ConverterValues />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

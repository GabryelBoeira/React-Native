import React, { Component } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import {Person} from './src/Person/PersonComponent'

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  
      list: require('./src/pessoas.json'),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.list}
          keyExtractor={(item) => item.cpf}
          renderItem={({item}) => <Person data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
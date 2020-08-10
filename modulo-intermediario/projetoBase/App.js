import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList} from 'react-native'

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

class Person extends Component {
  render(){ 
    return(
      <View style={styles.viewPerson}>
        <Text style={styles.textPerson}> Nome: {this.props.data.nome}</Text>
        <Text style={styles.textPerson}> Idade: {this.props.data.idade}</Text>
        <Text style={styles.textPerson}> E-mail: {this.props.data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPerson: {
    backgroundColor: '#222',
    height: 85,
    marginBottom: 5
  },
  textPerson: {
    color: '#fff',
    fontSize: 20,
  }
});
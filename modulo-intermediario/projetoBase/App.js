import React, { Component } from 'react'
import { Text, StyleSheet, View, Switch} from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: false,
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={status => this.setState({status})}
          thumbColor="#0fff"
        />
        <Text style={styles.text}>
          { this.state.status ? "Ativo": "Inativo"}
          thum 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15
  },
  text: {
    textAlign: 'center',
    fontSize: 30, 
  }
});
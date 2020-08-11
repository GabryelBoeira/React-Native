import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import Slider from '@react-native-community/slider'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 50,
    };

  }

  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={valor => this.setState({valor})}
          value={this.state.valor}
          minimumTrackTintColor="#00FF0F"
          maximumTrackTintColor="#ff0f00"
          onMagicTap={true}
        />
        <Text style={styles.text}> 
          {this.state.valor.toFixed(0)}
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
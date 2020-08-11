import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import {Picker} from '@react-native-community/picker'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [{key: 0, value: 29.99, label: "Frango/Catupiry"},
               {key: 1, value: 34.99, label: "Aliche" },
               {key: 2, value: 24.99, label: "Calabresa"},
               {key: 3, value: 29.99, label: "Bacon e Milho"}]
    };

    this.pizzasItem = this.pizzasItem.bind(this);
  }

  pizzasItem = () => {
    return(
     this.state.pizzas.map((item, index) => {
      return <Picker.Item key={index} value={index} label={item.label} />;
    }));
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
            selectedValue={this.state.pizza}
            onValueChange={pizza => this.setState({ pizza })}>
            {this.pizzasItem()}                      
        </Picker>

        <Text style={styles.pizzas}>
          Você Selecionou: {this.state.pizzas[this.state.pizza].label}
        </Text>
        <Text style={styles.pizzas}>
          R$:  {this.state.pizzas[this.state.pizza].value.toFixed(2)}
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
  logo: {
    textAlign: 'center',
    fontSize: 25, 
  },
  pizzas: {
    textAlign: 'center',
    backgroundColor: '#DDD',
    marginTop: 15,
    fontSize: 25
  }
});
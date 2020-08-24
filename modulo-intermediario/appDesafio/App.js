import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Switch} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      limite: '',
      isEstudande: false,
    };

    this._isValid = this._isValid.bind(this);
  }

  _isValid() {
    for (let prop in this.state) {
      if (obj.hasOwnProperty(prop)) alert('Campos não preenchidos!');
      return false;
    }
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Cadastro Bancario no React Bank of America</Text>
        <View style={styles.viewColumn}>
          <Text style={styles.text}>Nome: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(nome) => this.setState({nome})}
            value={this.state.nome}
          />
        </View>
        <View style={styles.viewColumn}>
          <Text style={styles.text}>Idade:</Text>
          <TextInput
            keyboardType={'number-pad'}
            style={styles.input}
            onChangeText={(idade) => this.setState({idade})}
            value={this.state.idade}
          />
        </View>
        <View style={styles.viewRow}>
            <Text style={styles.text}>Estudante: </Text>
            <Switch
                value={this.state.isEstudande}
                onValueChange={isEstudande => this.setState({isEstudande})}
            />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6,
  },
  viewColumn: {
    marginLeft: 15,
    marginRight: 15,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  viewRow: {
    marginLeft: 15,
    marginRight: 15,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    marginBottom: 5,
    fontSize: 15,
  },
});

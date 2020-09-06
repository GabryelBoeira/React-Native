import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Switch, Button} from 'react-native';
import {Picker} from '@react-native-community/picker';

const initialState = {
  nome: null,
  idade: null,
  sexo: null,
  limite: null,
  isEstudande: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState}
    this._isValid = this._isValid.bind(this);
  }

  _isValid() {
    if(!this.state.nome){
      alert("Nome não preenchido")
      return;
    }

    if(!this.state.idade){
      alert("Idade não preenchido")
      return;
    }

    if(!this.state.sexo){
      alert("Sexo não preenchido")
      return;
    }

    if(!this.state.limite){
      alert("Limite não preenchido")
      return;
    }
    this.setState({...initialState})
    alert("Conta criada com sucesso!")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewTitle}>
          <Text style={styles.text}>Cadastro Bancario no React Bank of America</Text>
        </View>        
        <View style={styles.viewColumn}>
          <Text style={styles.text}>Nome: </Text>
          <TextInput
            style={styles.input}
            onChangeText={(nome) => this.setState({nome})}
            value={this.state.nome}
          />
          <Text style={styles.text}>Limite da Conta:</Text>
          <TextInput
            keyboardType={'number-pad'}
            style={styles.input}
            onChangeText={(limite) => this.setState({limite})}
            value={this.state.limite}
          />
          <Text style={styles.text}>Idade:</Text>
          <TextInput
            keyboardType={'number-pad'}
            style={{height: 40, width: '100%'}}
            onChangeText={(idade) => this.setState({idade})}
            value={this.state.idade}
          />
          <Text style={styles.text}>Sexo:</Text>
          <Picker
            style={styles.input}
            selectedValue={this.state.sexo}
            onValueChange={(sexo) =>
              this.setState({sexo})
            }>
            <Picker.Item label="Selecione" value={null} />
            <Picker.Item label="Masculino" value={"1"} />
            <Picker.Item label="Feminino" value={"2"} />
            <Picker.Item label="Prefiro não Dizer" value={"3"} />
          </Picker>
        </View>
        <View style={styles.viewRow}>
            <Text style={styles.text}>Estudante: </Text>
            <Switch
                value={this.state.isEstudande}
                onValueChange={isEstudande => this.setState({isEstudande})}
            />
        </View>
        <View style={styles.viewBtn}>
          <Button
            style={styles.btn}
            onPress={this._isValid}
            title={"Criar Conta"}
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
    fontSize: 19,
    fontWeight: 'bold',
  },
  viewTitle: {
    alignItems: 'center'
  },
  viewBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b2f',
    borderRadius: 25
  },
});

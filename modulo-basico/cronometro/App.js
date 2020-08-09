import React, {Component}from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'INICIAR',
      ultimo: 0,
    };

    this.timer = null;// timer do relogio
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  
  iniciar() {
    if(this.timer == null) { 
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero+ 0.1})
      }, 100);
      this.setState({botao: 'Parar'});
    } else{
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Iniciar'});
    }  
  }
  
  parar() {
  
  }

  limpar(){
    clearInterval(this.timer);
    this.timer = null;
    this.setState({
      ultimo: this.state.numero,
      botao: 'Iniciar',
      numero: 0,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.chronometer}  
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnView}>
          
          <TouchableOpacity style={styles.button} onPress={this.iniciar}>
            <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.limpar}>
            <Text style={styles.btnText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewLast}>
         <Text style={styles.textLast}>
          {this.state.ultimo > 0 ? `Último Tempo: ${this.state.ultimo.toFixed(2)}s`: ''}
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
  },  
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  btnView: {
    flexDirection: 'row',
    marginTop: 70, 
    height: 40,
  },
  viewLast: {
    marginTop: 40,
  },
  textLast: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});

export default App;

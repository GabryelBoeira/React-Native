import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      textoFrase: 'Inicial',
      img: require('./scr/biscoito.png'),
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiveres paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
      'Gente todo dia arruma os cabelos, por que não o coração?',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'A juventude não é uma época da vida, é um estado de espírito.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
    ];
  }

  quebraBiscoito() {
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numAleatorio],
      img: require('./scr/biscoitoAberto.png'),
    })
  }
  
  render(){
    return ( 
      <View style={styles.container}> 

        <Image 
          source={this.state.img}
          style={styles.img} />
          
        <Text style={styles.texto}> {this.state.textoFrase} </Text> 
        <TouchableOpacity
          style={styles.btn}
          onPress={this.quebraBiscoito}
          >
          <View style={styles.viewBtn}>
            <Text style={styles.textoBtn} >Abrir biscoito</Text>
          </View>
        </TouchableOpacity>      
      </View>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    fontSize: 20,
    color: '#dd7b2f',
    margin: 15,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  img: {
    width: 250,
    height: 250,   
  },
  btn: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b2f',
    borderRadius: 25
  },
  viewBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b2f',
  }
});

export default App;

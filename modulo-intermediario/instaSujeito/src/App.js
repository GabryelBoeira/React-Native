import React, { Component } from 'react'
import { View, StyleSheet, Image, FlatList, Pressable } from 'react-native'
import Lista from './components/Lista.js'

export default class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Gabryel Boeira', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://avatars0.githubusercontent.com/u/33075550?s=460&u=2266b03bfab61e18dad8b59f1299d495846c2e24&v=4', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          isLike: false, 
          likers: 5
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Primeiro dia de Trabalho :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png', 
          isLike: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          isLike: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Mario', 
          descricao: 'Isso sim que é corrida!', 
          imgperfil: 'https://assets.papelpop.com/wp-content/uploads/2017/09/mario.jpg', 
          imgPublicacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUNfIxBwA7dXh3HCJjcr2MVxEOHPiJNkBghw&usqp=CAU', 
          isLike: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Luigi', 
          descricao: 'Nave pronta para o estouro', 
          imgperfil: 'https://b7.pngbarn.com/png/330/7/new-super-mario-bros-wii-mario-luigi-superstar-saga-mario-bros-png-clip-art.png', 
          imgPublicacao: 'https://img.ibxk.com.br/2019/10/20/20222412521081.jpg',
          isLike: false, 
          likers: 32
        }
      ]
    }
  }
  render() {
    return (
      <View style={styles.conteiner}>
        <View style={styles.header}> 
          <Pressable>
            <Image
              source={require('../assets/img/logo.png')}
              style={styles.logo}
              />
          </Pressable>
          <Pressable>
            <Image
              source={require('../assets/img/send.png')}
              style={styles.send}
            />
          </Pressable>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.state.feed}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({item}) => <Lista feed={item} />}

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1

  },
  send: {
    width: 23,
    height: 23
  },
  logo: {

  }

})
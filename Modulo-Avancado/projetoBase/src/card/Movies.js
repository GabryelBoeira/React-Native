import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'

export default class Movies extends Component{
  render(){
    const {nome, foto, sinopse} = this.props.data
    return(
      <View style={styles.card}>
        <Text style={styles.title}>{nome}</Text>
        <Image
          source={{ uri: foto }}
          style={styles.poster}
        />
        <View style={styles.viewButton}>
          <Pressable style={styles.button} onPress={()=> alert(sinopse)}>
            <Text style={styles.buttonText}>LEIA MAIS</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
    elevation: 3,
    shadowRadius: 5,
    borderRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
  },
  title: {
    padding: 15,
    fontSize: 18,
  },
  poster: {
    zIndex: 2,
    height: 250,
  },
  viewButton: {
    zIndex: 9,
    marginTop: -40,
    alignItems: 'flex-end',
  },
  button: {
    width: 100,
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#09A6FF',

  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  }
})
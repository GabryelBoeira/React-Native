import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import api from './services/Api.js'
import Movies from './card/Movies.js'

export default class App extends Component {

  state = {
    movies: [],
    loading: true
  }

  async componentDidMount(){
    const response = await api.get('/r-api/?api=filmes')
    this.setState({
      movies: response.data,
      loading: false
    })
  }

  render() {
    if(this.state.loading){
      return(
        <View style={styles.viewLoading}>
          <ActivityIndicator color="#09A6FF" size={40}/>
        </View>
      )
    }else{
      return(
        <View style={styles.container}>  
          <FlatList
            data={this.state.movies}
            keyExtractor={item => `${item.id}`}
            renderItem={ ({item}) => <Movies data={item} /> }            
          />  
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  viewLoading: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
  }
})
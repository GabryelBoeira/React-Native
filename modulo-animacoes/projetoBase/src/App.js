import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated} from 'react-native'

export default class App extends Component {
  
  state = {
    widthAnimation: new Animated.Value(150),
    heightAnimation:  new Animated.Value(100),
  };

  componentDidMount(){     
 
    Animated.loop(
      Animated.sequence([
        Animated.timing(
        this.state.heightAnimation, {
          toValue: 300,
          duration: 700,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          this.state.heightAnimation, {
            toValue: 100,
            duration: 700,
              useNativeDriver: false
            }
          )        
      ])
    ).start()  
  }
  
  render() {
    return (
      <View style={styles.container}>

        <Animated.View 
          style={[{ 
            width: this.state.widthAnimation, 
            height: this.state.heightAnimation,
          }, 
            styles.viewAnimation
          ]}
        >
          <Text style={styles.textLoading}> Carregando... </Text>  
        </Animated.View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewAnimation: {   
    backgroundColor: '#4169e1',
    justifyContent: 'center'
  },
  textLoading: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center'
  }
})

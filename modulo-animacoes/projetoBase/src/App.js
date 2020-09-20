import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated} from 'react-native'

export default class App extends Component {
  
  state = {
    widthAnimation: new Animated.Value(150),
    heightAnimation:  new Animated.Value(50),
    opacityAnimation: new Animated.Value(0)
  };

  componentDidMount(){     
    /* Animação unica 
    Animated.timing(
      this.state.widthAnimation, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }
    ).start()  
    
    Animação em sequecia
    Animated.sequence([
      Animated.timing(
        this.state.heightAnimation, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        this.state.widthAnimation, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }
      )
    ]).start()  

    /* Animação em Paralelo
    Animated.parallel([
      Animated.timing(
        this.state.heightAnimation, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }
      ),
      Animated.timing(
        this.state.widthAnimation, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false
        }
      )
    ]).start()  
    */
    // Animação em Paralelo e Sequecia
    Animated.sequence([
      Animated.timing(
        this.state.opacityAnimation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.state.heightAnimation, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false
          }
        ),
        Animated.timing(
          this.state.widthAnimation, {
            toValue: 300,
            duration: 2000,
            useNativeDriver: false
          }
        )
      ]),
      Animated.timing(
        this.state.opacityAnimation, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: false
        }
      ),
    ]).start()  
  }
  
  render() {
    return (
      <View style={styles.container}>

        <Animated.View 
          style={[{ 
            width: this.state.widthAnimation, 
            height: this.state.heightAnimation,
            opacity: this.state.opacityAnimation
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

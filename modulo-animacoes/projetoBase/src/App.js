import React, {Component} from 'react';
import {Text, StyleSheet, View, Animated, Pressable} from 'react-native';

export default class App extends Component {
  state = {
    widthAnimation: new Animated.Value(150),
    heightAnimation: new Animated.Value(35),
    opacityAnimation: new Animated.Value(0),
  };

  carregarGrafico = () => {
    Animated.sequence([
      Animated.timing(this.state.opacityAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start(),
      Animated.timing(this.state.heightAnimation, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
    ]);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewPressable}>
          <Pressable onPress={() => this.carregarGrafico()}>
            <Text style={styles.pressableText}>Gerar Grafico</Text>
          </Pressable>
        </View>

        <View style={styles.viewGrafico}>
          <Animated.Text
            style={({opacity: this.state.opacityAnimation}, styles.textTitle)}>
            Vendas
          </Animated.Text>
          <Animated.View
            style={[
              {
                width: this.state.widthAnimation,
                height: this.state.heightAnimation,
                opacity: this.state.opacityAnimation,
              },
              styles.viewAnimation,
            ]}>
            <Text style={styles.textLoading}> R$ 150,00 </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewAnimation: {
    backgroundColor: '#4169e1',
    justifyContent: 'center',
  },
  textLoading: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
  viewPressable: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4169e1',
  },
  pressableText: {
    fontSize: 25,
    color: '#fff',
  },
  viewGrafico: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    color: '#000',
  },
});

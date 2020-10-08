import React, {Component} from 'react';
import {Text, StyleSheet, View, Animated, Pressable} from 'react-native';

export default class App extends Component {
  state = {
    widthAnimation: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.widthAnimation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }

  percent = () => {
    return this.state.widthAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.viewloadingBar,
            {
              width: this.percent(),
            },
          ]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  viewloadingBar: {
    backgroundColor: '#4169e1',
    width: '75%',
    height: 25,
  },
});

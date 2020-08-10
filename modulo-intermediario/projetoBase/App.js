import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.conteiner}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={true}>  
          <View style={styles.viewBox1}></View>
          <View style={styles.viewBox2}></View>
          <View style={styles.viewBox3}></View>
          <View style={styles.viewBox4}></View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  viewBox1: {
    backgroundColor: 'red',
    height: 250,
    width: 150,
  },
  viewBox2: {
    backgroundColor: 'green',
    height: 250,
    width: 150,
  },
  viewBox3: {
    backgroundColor: 'yellow',
    height: 250,
    width: 150,
  },
  viewBox4: {
    backgroundColor: 'blue',
    height: 250,
    width: 150,
  },
});

export default App;

import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'

class Person extends Component {
    render(){ 
        return(
        <View style={styles.viewPerson}>
            <Text style={styles.textPerson}> Nome: {this.props.data.nome}</Text>
            <Text style={styles.textPerson}> Idade: {this.props.data.idade}</Text>
            <Text style={styles.textPerson}> E-mail: {this.props.data.email}</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    viewPerson: {
      backgroundColor: '#222',
      height: 85,
      marginBottom: 5
    },
    textPerson: {
      color: '#fff',
      fontSize: 20,
    }
});

export default Person;
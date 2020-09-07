import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Pressable} from 'react-native'

export default class Lista extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteiner: {
      flex: 1,
    },
})
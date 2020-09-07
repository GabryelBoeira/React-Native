import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Pressable} from 'react-native'

export default class Lista extends Component {
    constructor(props){
        super(props)
        this.state = {
            feed: this.props.feed
        }
        this.like = this.like.bind(this)
        this.mostraLikes = this.mostraLikes.bind(this)
        this.imageLike= this.imageLike.bind(this)
    }

    mostraLikes(likers) {
        let feed = this.state.feed
        if(feed.likers <= 0) {
            return;
        }

        return (
            <Text style={styles.textLikes}>
                {feed.likers} {feed.likers < 1 ? 'curtidas': 'curtida'}
            </Text>
        )        
    }

    like() {
        let feed = this.state.feed
        if(feed.isLike) {
            this.setState({
                feed: {
                    ...feed,
                    isLike: false,
                    likers: feed.likers -1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    isLike: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    imageLike(isLike) {
        return isLike ? require('../../assets/img/likeada.png') : require('../../assets/img/like.png')
    }

    render() {
        return (
            <View style={styles.viewFeed}>
                <View  style={styles.viewPerfil}>
                    <Image 
                        style={styles.fotoPerfil}
                        source={{uri: this.state.feed.imgperfil}}
                    />
                    <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>
                <Image 
                    resizeMode={'contain'}
                    style={styles.fotoFeed}
                    source={{uri: this.state.feed.imgPublicacao}}
                />
                <View style={styles.viewButton}>
                    <Pressable onPress={this.like}>
                        <Image
                            style={styles.icone}
                            source={this.imageLike(this.state.feed.isLike)}
                        />
                    </Pressable>               
                    <Pressable onPress={() => true}>
                        <Image
                            style={styles.icone}
                            source={require('../../assets/img/send.png')}
                        />
                    </Pressable>
                    {this.mostraLikes(this.state.feed.likers)}
                </View>
                <View style={styles.viewRodape}>
                    <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
                    <Text style={styles.descricaoRodape}>{this.state.feed.descricao}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewFeed: {
    },
    viewPerfil: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    nomeUsuario: {
        fontSize: 22,
        color: '#000',
        textAlign: 'left'
    },
    fotoFeed: {
        flex: 1,
        height: 400,
        alignItems: "center"

    },
    viewButton: {
        flexDirection: 'row',
        padding: 5,
    },
    icone: {
        width: 33,
        height: 33,
        marginLeft: 5
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nomeRodape:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        color: '#000',
    },
    descricaoRodape: {
        fontSize: 15,
        marginLeft: 5,
        color: '#000',
    },
    textLikes: {
        marginLeft: 5,
        fontWeight: 'bold',
    }
})
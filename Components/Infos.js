import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList, ImageBackground } from 'react-native'
import firebase from 'firebase'

export default class Infos extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={cat:'', listeInfos: [], chargement:true}
    }
    componentDidMount(){
        this.setState({cat:this.props.navigation.state.params.categorie});
        const ref = firebase.database().ref('infos');
        ref.orderByChild('ordre').on('value', (snapshot) => {
            this.setState({listeInfos: snapshot.val(), chargement:false})
        });
    }
    render(){
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.listeInfos);

            return(
                <ImageBackground source={require('../assets/backgroundFlute.png')} style={styles.container}>
                    <FlatList
                        data={array}
                        keyExtractor={(item) => item.titre.toString()}
                        renderItem={({item}) => {
                            if(item.cat == this.state.cat){
                                return(
                                    <View style={styles.info}>
                                        <Text style={styles.titre}>{item.titre}{'\n'}</Text>
                                        <Text style={styles.texte}>{item.desc}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </ImageBackground>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    info:{
        minHeight: 20,
        backgroundColor:'#ffffff',
        margin: 20,
        padding: 8,
        borderRadius: 10,
        opacity : .8
    },
    titre:{
        fontSize:20,
        fontFamily:'monospace'
    },
    texte:{
        fontSize:15
    }
})
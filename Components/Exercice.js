import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList, ImageBackground } from 'react-native'
import firebase from 'firebase'

export default class Exercice extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={exerciceComplet: [], chargement:true}
    }
    componentDidMount(){
        const ref = firebase.database().ref('exercices')
        const nomExo = this.props.navigation.state.params.exo;
        const query = ref.orderByChild('titre')
        query.equalTo(nomExo)
        .on('value', (snapshot) => {
            this.setState({exerciceComplet: snapshot.val(), chargement:false})
        });
    }

    render(){
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.exerciceComplet);
            const exoInfos = array.map(exercice => <View style={styles.container}>
            <View style={styles.titre_container}><Text style={styles.titre}>{exercice.titre}</Text></View>
            <Text style={styles.diff}>Difficulté : {exercice.level}{'\n'}Durée : {exercice.len} minutes</Text>
            <View style={styles.desc_container}><Text style={styles.desc}>{exercice.desc}</Text></View>
            <Image source={{uri:exercice.pic}} style={styles.pic} resizeMode="contain"/>
            </View>)
            return(
                <ImageBackground source={require('../assets/backgroundPiano.png')} style={styles.container}>
                    {exoInfos}
                </ImageBackground>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    titre_container:{
        marginTop:5,
        marginBottom:5,
        paddingRight:5,
        paddingLeft:5,
        width : '100%',
        minHeight : 50,
        borderWidth:4,
        borderColor:'#3AE381',
        backgroundColor:'#C3F6D9',
        opacity:0.9,
        alignItems:'center',
        justifyContent:'center'
    },
    titre:{
        maxWidth:300,
        fontSize:15,
        fontFamily:'monospace'
    },
    diff:{
        paddingLeft : 5,
        fontSize:20,
        color:'#000000',
        backgroundColor : '#ffffff',
        opacity : .6
    },
    desc_container:{
        margin:5,
        padding:5,
        borderWidth:2,
        borderColor:'#ffffff',
        borderRadius:5,
        backgroundColor:'#f0f0f0',
        opacity:0.9
    },
    desc:{
        fontSize:15
    },
    pic:{
        flex:1,
        borderRadius:30
    }
})
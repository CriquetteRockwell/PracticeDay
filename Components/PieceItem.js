import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Linking, ImageBackground, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

export default class PieceItem extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={morceauComplet: [], chargement:true}
    }

    componentDidMount(){
        const ref = firebase.database().ref('morceaux')
        const nomMorceau = this.props.navigation.state.params.morceau;
        const query = ref.orderByChild('titre')
        query.equalTo(nomMorceau)
        .on('value', (snapshot) => {
            console.log(snapshot.val()); this.setState({morceauComplet: snapshot.val(), chargement:false})
        });
        console.log(nomMorceau)
    }

    render() {
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.morceauComplet);
            const morceauInfos = array.map(morceau => <View style={styles.container}>
            <View style={styles.titre_container}><Text style={styles.titre}>{morceau.titre}{"\n"}</Text></View>
            <Text style={styles.diff}>Difficulté : {morceau.level}</Text>
            <View style={styles.desc_container}>
                <Text>Compositeur : {morceau.compo}</Text>
                <Text>Année / Epoque : {morceau.date}</Text>
                <Text style={styles.desc}>{"\n"}{"\n"}A propos de l'oeuvre :{"\n"}{"\n"}{morceau.desc}{"\n"}{"\n"}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(morceau.lien)}>
                    <Text style={{fontSize: 16}}>Téléchargement</Text>
                </TouchableOpacity>
            </View>
            </View>)
            return(
                <ImageBackground source={require('../assets/backgroundViolin.png')} style={styles.container}>
                    {morceauInfos}
                </ImageBackground>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titre:{
        maxWidth:300,
        fontSize:18
    },
    titre_container:{
        marginTop:5,
        paddingRight:5,
        paddingLeft:5,
        width : '100%',
        minHeight : 50,
        borderWidth:4,
        borderColor:'#F0C619',
        backgroundColor:'#FAEDBA',
        opacity:0.9,
        alignItems:'center',
        justifyContent:'center'
    },
    diff:{
        marginTop:15,
        paddingLeft : 5,
        fontSize:20,
        color:'#000000',
        backgroundColor : '#ffffff',
        opacity : .6
    },
    desc_container:{
        marginTop:30,
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
    button: {
        marginBottom: 15,
        marginTop: 30,
        padding:5,
        minWidth: 260,
        maxWidth: 360,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAEDBA',
        opacity:0.9,
        borderColor:'#F0C619',
        borderWidth:4,
        borderRadius: 25
    },
    morceau:{
        fontSize: 16
    }
})
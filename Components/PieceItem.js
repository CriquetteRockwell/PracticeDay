import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, Linking } from 'react-native'
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
            const morceauInfos = array.map(morceau => <View><Text style={styles.titre}>{morceau.titre}{"\n"}</Text>
            <Text style={styles.diff}>Difficulté : {morceau.level}</Text>
            <Text>Compositeur : {morceau.compo}</Text>
            <Text>Année / Epoque : {morceau.date}</Text>
            <Text style={styles.desc}>{"\n"}{"\n"}Description :{"\n"}{"\n"}{morceau.desc}{"\n"}{"\n"}</Text>
            <Text onPress={() => Linking.openURL(morceau.lien)}>
                Télécharger
            </Text>
            </View>)
            return(
                <View style={styles.container}>
                    {morceauInfos}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titre:{
        fontSize:25,
        textAlign:'center',
    },
    diff:{
        fontSize:18,
        color:'dimgrey'
    },
    desc:{
        fontSize:15
    }
})
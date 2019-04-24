import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, FlatList } from 'react-native'
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
            console.log(snapshot.val()); this.setState({exerciceComplet: snapshot.val(), chargement:false})
        });
        console.log(nomExo)
    }

    render(){
        if(this.state.chargement){
            return(
                <Text>Chargement en cours</Text>
            )
        }
        else{
            const array = Object.values(this.state.exerciceComplet);
            const exoInfos = array.map(exercice => <View><Text style={styles.titre}>{exercice.titre}{"\n"}</Text>
            <Text style={styles.diff}>Difficulté : {exercice.level}</Text>
            <Text style={styles.desc}>{"\n"}{"\n"}Déroulement :{"\n"}{"\n"}{exercice.desc}{"\n"}{"\n"}</Text>
            <Image source={{uri:exercice.pic}} style={styles.pic} resizeMode="contain"/>
            </View>)
            return(
                <View style={styles.container}>
                    {exoInfos}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    titre:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },
    diff:{
        fontSize:18,
        color:'dimgrey'
    },
    desc:{
        fontSize:15
    },
    pic:{
        width: '100%',
        height: 200,
        borderRadius:30
    }
})
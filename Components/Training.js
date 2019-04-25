import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground, Picker } from 'react-native'
import firebase from 'firebase'

export default class Training extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={duree:15, niveau:1}
    };
    componentDidMount(){
        const dureeDispo = this.props.navigation.state.params.t;
        const niveauChoisi = this.props.navigation.state.params.n;
        this.setState({ duree:dureeDispo, niveau:niveauChoisi })
    }
    render() {
        var tempsMorceau = 0;
        if(this.state.duree > 15)
        {
            tempsMorceau= this.state.duree/3;
        }
        const tempsRestant = this.state.duree - tempsMorceau
        const tempsResp = tempsRestant/10;
        const tempsEmb = tempsRestant*((3-Math.trunc(this.state.niveau/2))/10);
        const tempsExp = tempsRestant*((2 + Math.trunc(this.state.niveau/2))/10);
        const tempsDoigtFluid = (4*tempsRestant)/10;

        return (
            <ImageBackground style={styles.container} source={require('../assets/backgroundViolin.png')}>
                <Text style={styles.titre}>Entraînement pour :{'\n'}{this.state.duree} minutes - niveau {this.state.niveau}</Text>
                <Text style={styles.training_desc}>Respiration : {tempsResp} minutes</Text>
                <Text style={styles.training_desc}>Embouchure : {tempsEmb} minutes</Text>
                <Text style={styles.training_desc}>Doigtés / Fluidité : {tempsDoigtFluid} minutes</Text>
                <Text style={styles.training_desc}>Expression : {tempsExp} minutes</Text>
                <Text style={styles.training_desc}>Morceau : {tempsMorceau} minutes</Text>
                <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Exercices')}>
                        <Text style={{fontSize:12}}>Aller aux exercices</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    titre:{
        margin : 20,
        fontSize: 20,
        textAlign:'center',
        fontFamily:'monospace',
        backgroundColor : '#ffffff',
        opacity:0.8,
        borderRadius : 10
    },
    training_desc:{
        margin : 10,
        padding: 5,
        fontSize: 15,
        backgroundColor:'#FDF8F9',
        borderRadius: 5,
        opacity : .8
    },
    button: {
        marginBottom: 15,
        marginTop: 15,
        padding:5,
        minWidth: 260,
        maxWidth: 360,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAEAEC',
        opacity:0.9,
        borderColor:'#D4314A',
        borderWidth:4,
        borderRadius: 25
    }
})
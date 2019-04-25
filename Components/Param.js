import React from 'react'
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground, Picker } from 'react-native'
import firebase from 'firebase'

export default class Param extends React.Component {
    constructor(){
        super()
        //firebase.auth()
        this.state={duree:15, niveau:1}
    };
    updateDuree = (t) => {this.setState({ duree: t })};
    updateNiveau = (n) => {this.setState({ niveau: n })};
    render() {
        return (
           <ImageBackground style={{flex:1}} source={require('../assets/backgroundViolin.png')}>
                <View style={styles.picker_container}>
                    <Text>  Choisissez une durée :</Text>
                    <Picker selectedValue = {this.state.duree} onValueChange = {this.updateDuree}>
                        <Picker.Item label = "15 minutes" value = {15} />
                        <Picker.Item label = "30 minutes" value = {30} />
                        <Picker.Item label = "45 minutes" value = {45} />
                        <Picker.Item label = "1 heure" value = {60} />
                        <Picker.Item label = "1 heure 15" value = {75} />
                        <Picker.Item label = "1 heure 30" value = {90} />
                    </Picker>
                </View>
                <View style = {styles.picker_container}>
                    <Text>  Choisissez un niveau :</Text>
                    <Picker selectedValue = {this.state.niveau} onValueChange = {this.updateNiveau}>
                        <Picker.Item label = "Niveau 1 (débutant)" value = {1} />
                        <Picker.Item label = "Niveau 2 (amateur)" value = {2} />
                        <Picker.Item label = "Niveau 3 (intermédiaire)" value = {3} />
                        <Picker.Item label = "Niveau 4 (confirmé)" value = {4} />
                        <Picker.Item label = "Niveau 5 (professionel)" value = {5} />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Training', {t: this.state.duree, n: this.state.niveau})}>
                    <Text style={{fontSize:18}}>VALIDER</Text>
                </TouchableOpacity>
           </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    exercice:{
        fontSize: 16
    },
    picker_container:{
        marginTop:40,
        marginRight:20,
        marginLeft:20,
        padding:8,
        height:80,
        borderColor:'#D4314A',
        borderWidth:4,
        borderRadius:40,
        backgroundColor:'#F2C1C8',
        opacity: 0.95
    },
    button:{
        marginTop:40,
        marginRight:100,
        marginLeft:100,
        padding:8,
        height:50,
        borderColor:'#ffffff',
        borderWidth:4,
        borderRadius:25,
        backgroundColor:'#ffffff',
        opacity: 0.95,
        alignItems:'center',
        justifyContent:'center'
    }
})
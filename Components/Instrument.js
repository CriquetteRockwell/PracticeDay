import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import firebase from 'firebase'

export default class Instrument extends React.Component {
  constructor(){
    super()
  }
  state = { currentUser: null }

  render() {
    return (
        <ImageBackground source={require('../assets/backgroundFlute.png')} style={styles.container}>
            <View style={{flex : 1, flexDirection: 'row'}}>
            </View>
            <View style={styles.body_row}>
                <View style={styles.body_cell}>
                    <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Scales')}>
                    <Image source={require('../assets/musical-notes-symbols.png')} style={styles.icon}/>
                    <Text/>
                    <Text>Gammes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body_cell}>
                    <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Doigtes')}>
                        <Image source={require('../assets/more.png')} style={styles.icon}/>
                        <Text/>
                        <Text>Doigtés</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body_row}>
                <View style={styles.body_cell}>
                    <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Infos', {categorie: 'histoire'})}>
                    <Image source={require('../assets/pan-flute.png')} style={styles.icon}/>
                    <Text/>
                    <Text>Histoire</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body_cell}>
                    <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Infos', {categorie: 'musiciens'})}>
                    <Image source={require('../assets/man-playing-flute.png')} style={styles.icon}/>
                    <Text/>
                    <Text>Musiciens</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body_row}>
                <View style={styles.body_cell}>
                    <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Infos', {categorie: 'airs'})}>
                        <Image source={require('../assets/music-sheet.png')} style={styles.icon}/>
                        <Text/>
                        <Text>Grands airs</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body_cell}>
                    <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Infos', {categorie: 'fonct'})}>
                        <Image source={require('../assets/levels.png')} style={styles.icon}/>
                        <Text/>
                        <Text>Fonctionnement</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex : 1, flexDirection: 'row'}}>
            </View>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4EEFF'
  },
  logout_button: {
    flex: 1,
    margin: 5
  },
  welcome_text: {
    flex: 2,
    margin: 5
  },
  body: {
    flex : 1,
    margin: 20
  },
  body_row:{
    flex : 2,
    flexDirection: 'row'
  },
  body_cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    width : 50,
    height : 50
  },
  bouton:{
    height : 100,
    width : 175,
    borderColor : "#1B9B9F",
    borderWidth : 4,
    borderRadius : 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin : 5,
    backgroundColor:'#D5EDED',
    opacity: 0.9
  }
})
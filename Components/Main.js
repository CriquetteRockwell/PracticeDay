// Main.js

import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import firebase from 'firebase'

export default class Main extends React.Component {
  constructor(){
    super()
  }
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  logout(){
    firebase.auth().signOut()
    this.props.navigation.navigate('Login')
  }

  render() {
    const { currentUser } = this.state
    return (
      <ImageBackground source={require('../assets/backgroundMain.png')} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcome_text}>
            Bienvenue, {currentUser && currentUser.email}
          </Text>
          <View style={styles.logout_button}>
            <Button color='#9B5FFF' title="Déconnexion" onPress={() => this.logout()}/>
          </View>
        </View>

        <View style={styles.body_row}>
        </View>
        <View style={styles.body_row}>
          <View style={styles.body_cell}>
            <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Param')}>
              <Image source={require('../assets/musical-note.png')} style={styles.icon}/>
              <Text/>
              <Text>Entraînement</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body_cell}>
            <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Exercices')}>
              <Image source={require('../assets/music-stand.png')} style={styles.icon}/>
              <Text/>
              <Text>Exercices</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.body_row}>
          <View style={styles.body_cell}>
            <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Pieces')}>
              <Image source={require('../assets/music.png')} style={styles.icon}/>
              <Text/>
              <Text>Morceaux</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body_cell}>
            <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate('Instrument')}>
              <Image source={require('../assets/flute.png')} style={styles.icon}/>
              <Text/>
              <Text>Mon instrument</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body_row}/>
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
    flex : 1,
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
    borderColor : "#9B5FFF",
    borderWidth : 4,
    borderRadius : 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin : 5,
    backgroundColor:'#ffffff',
    opacity: 0.9
  }
})
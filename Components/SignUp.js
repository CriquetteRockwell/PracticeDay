// SignUp.js

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, ImageBackground } from 'react-native'
import firebase from 'firebase'

export default class SignUp extends React.Component {
  constructor(){
    super()
  }
  state = { email: '', password: '', errorMessage: null }
  
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <ImageBackground source={require('../assets/backgroundInscription.png')} style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Mot de passe"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
          <Text>Déjà un compte ? Connectez-vous</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    padding:8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    backgroundColor:'#ffffff',
    borderRadius:20
  },
  button: {
    marginTop: 15,
    padding:5,
    minWidth: 240,
    maxWidth: 360,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCDDE5',
    opacity:0.9,
    borderColor:'#F78EA9',
    borderWidth:4,
    borderRadius: 25
  }
})
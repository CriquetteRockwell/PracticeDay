// Login.js

import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

export default class Login extends React.Component {
  constructor(){
    super()
  }
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <ImageBackground source={require('../assets/backgroundConnexion.png')} style={styles.container}>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text>Pas de compte ? Inscrivez-vous</Text>
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
    backgroundColor: '#FFDFDF',
    opacity:0.9,
    borderColor:'#FF6060',
    borderWidth:4,
    borderRadius: 25
  }
})
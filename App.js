import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import Navigation from './navigation/Navigation'
import Firebase from './Helpers/Firebase'

export default class App extends React.Component {
  constructor()
  {
    super()
  }

  componentWillMount(){
    Firebase.init();
  }

  render() {
    return <Navigation />;
  }
}
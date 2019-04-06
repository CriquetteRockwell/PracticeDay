// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Loading from '../Components/Loading'
import SignUp from '../Components/SignUp'
import Main from '../Components/Main'
import Scales from '../Components/Scales'

const SearchStackNavigator = createStackNavigator({
  Loading: {
    screen: Loading,
    navigationOptions: {
      title: 'Loading',
      headerStyle: {
        backgroundColor: '#FFFFFF'
      },
      headerLeft: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Connexion',
      headerStyle: {
        backgroundColor: '#FF6666'
      },
      headerLeft: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Inscription',
      headerStyle: {
        backgroundColor: '#FF6AA0'
      },
      headerLeft: null
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Accueil',
      headerStyle: {
        backgroundColor: '#DAC5FF'
      },
      headerLeft: null
    }
  },
  Scales: {
    screen: Scales,
    navigationOptions: {
      title: 'Gammes',
      headerStyle: {
        backgroundColor: '#DAC5FF'
      }
    }
  }
})

export default createAppContainer(SearchStackNavigator)
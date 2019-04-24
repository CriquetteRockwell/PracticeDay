// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from '../Components/Login'
import Loading from '../Components/Loading'
import SignUp from '../Components/SignUp'
import Main from '../Components/Main'
import Scales from '../Components/Scales'
import Exercices from '../Components/Exercices'
import Exercice from '../Components/Exercice'
import Doigtes from '../Components/Doigtes'
import Pieces from '../Components/Pieces'
import PieceItem from '../Components/PieceItem'

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
        backgroundColor: '#98BDF0'
      }
    }
  },
  Exercices: {
    screen: Exercices,
    navigationOptions: {
      title: 'Exercices',
      headerStyle: {
        backgroundColor: '#98BDF0'
      }
    }
  },
  Exercice: {
    screen: Exercice,
    navigationOptions: {
      title: 'Exercice',
      headerStyle:{
        backgroundColor: '#DAC5FF'
      }
    }
  },
  Doigtes: {
    screen: Doigtes,
    navigationOptions: {
      title: 'Doigtés',
      headerStyle:{
        backgroundColor: '#DAC5FF'
      }
    }
  },
  Pieces: {
    screen: Pieces,
    navigationOptions: {
      title: 'Morceaux',
      headerStyle:{
        backgroundColor: '#FF9932'
      }
    }
  },
  PieceItem: {
    screen: PieceItem,
    navigationOptions:{
      title: 'Morceau',
      headerStyle:{
        backgroundColor: '#DAC5FF'
      }
    }
  }
})

export default createAppContainer(SearchStackNavigator)
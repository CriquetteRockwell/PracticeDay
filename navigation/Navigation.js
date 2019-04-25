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
import Instrument from '../Components/Instrument'
import Param from '../Components/Param'
import Training from '../Components/Training'
import Infos from '../Components/Infos'

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
        backgroundColor: '#3AE381'
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
        backgroundColor: '#F0C619'
      }
    }
  },
  Instrument: {
    screen: Instrument,
    navigationOptions:{
      title: 'Mon instrument',
      headerStyle:{
        backgroundColor: '#1B9B9F'
      },
      headerTintColor:'#fff'
    }
  },
  Param: {
    screen: Param,
    navigationOptions:{
      title: 'Entraînement',
      headerStyle:{
        backgroundColor: '#D4314A'
      },
      headerTintColor:'#fff'
    }
  },
  Training: {
    screen: Training,
    navigationOptions:{
      title: 'Entraînement',
      headerStyle:{
        backgroundColor: '#D4314A'
      },
      headerTintColor:'#fff'
    }
  },
  Infos: {
    screen: Infos,
    navigationOptions:{
      title: 'Infos',
      headerStyle:{
        backgroundColor: '#1B9B9F'
      },
      headerTintColor:'#ffffff'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
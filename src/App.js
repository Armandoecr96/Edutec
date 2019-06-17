/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation'

// Principal
import Main from './Menu'
import About from './Ayuda/About'
import Ayuda from './Ayuda/Help'

// Quimicos
import MainChemical from './chemical/Menu'
import BloodTest from './chemical/BloodTest'
import PreviewQuestion from './chemical/PreviewQuestion'

// Recepción

const ChemicalStack = createStackNavigator({
  HomeChemical: {
    screen: MainChemical,
    navigationOptions: {
      header: null
    }
  },
  BloodTest: {
    screen: BloodTest,
    navigationOptions: {
      title: 'Muestra Sanguínea'
    }
  },
  PreviewQuestion: {
    screen: PreviewQuestion,
    navigationOptions: {
      title: 'Preguntas Previas'
    }
  }
})

const RootStack = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      title: 'Acerca de'
    }
  },
  Chemical: {
    screen: ChemicalStack,
    navigationOptions: {
      header: null
    }
  },
  Ayuda: {
    screen: Ayuda,
    navigationOptions: {
      header: null
    }
  }
})

const App = createAppContainer(RootStack)

export default (App)

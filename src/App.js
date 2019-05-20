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
import Ayuda from './Ayuda/Ayuda'

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
      title: 'Muestra Sanguinea'
    }
  },
  PreviewQuestion: {
    screen: PreviewQuestion,
    navigationOptions: {
      title: 'Pregutas Previas'
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
  Ayuda: {
    screen: Ayuda,
    navigationOptions: {
      title: 'Acerca de'
    }
  },
  Chemical: {
    screen: ChemicalStack,
    navigationOptions: {
      header: null
    }
  }
})

const App = createAppContainer(RootStack)

export default (App)

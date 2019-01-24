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

// Quimicos
import MainChemical from './chemical/Menu'
import BloodTest from './chemical/BloodTest'

// Recepción

const ChemicalStack = createStackNavigator ({
  HomeChemical: {
    screen: MainChemical
  },
  BloodTest: {
    screen: BloodTest
  }
})

const RootStack = createStackNavigator ({
  Home: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  Chemical: {
    screen: ChemicalStack,
    navigationOptions: {
      header: null
    }
  }
})

const App = createAppContainer(RootStack);

export default (App)

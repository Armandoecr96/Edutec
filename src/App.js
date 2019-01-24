/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Main from './Menu'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RootStack = createStackNavigator ({
  Home: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  }
})

const App = createAppContainer(RootStack);

export default (App)

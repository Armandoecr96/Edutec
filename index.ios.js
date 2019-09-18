import { AppRegistry } from 'react-native'
import App from './src'
import {name as appName} from './app.json'

/**
 * Enable for debug network via Chrome
 */
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

AppRegistry.registerComponent(appName, () => App)
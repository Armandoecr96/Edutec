import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Video from 'react-native-video'
import tutorial from '../assets/videos/tutorial2.mp4'

/**
 * @constant {int} height
 * @constant {int} width
 * @memberof Help
 * @description Dimensiones de la pantalla
 */
const { height, width } = Dimensions.get('screen')

/**
 * @class Help
 * @description Vídeo introductorio a la aplicación
 */
class Help extends Component {
  render () {
    return (
      <Video source={tutorial}
        ref={(ref) => {
          this.player = ref
        }}
        fullscreen
        controls
        onEnd={() => this.props.navigation.navigate('Home')}
        style={styles.backgroundVideo}
      />
    )
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    right: 0,
    left: 0,
    width: width,
    height: height
  }
})

export default Help

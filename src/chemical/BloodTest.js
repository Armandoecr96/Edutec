/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import states from './states/BloodTestStates'
import { Container, Content, Card, CardItem, Button } from 'native-base'
import textBox from '../assets/images/caja-de-texto-1.png'
import playButtom from '../assets/images/play.png'
import pauseButtom from '../assets/images/pausa.png'
import stopButtom from '../assets/images/stop.png'
var SoundPlayer = require('react-native-sound')

var { height } = Dimensions.get('window')

export default class BloodTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      pause: false,
      song: null,
      playVisibility: 'flex',
      pauseVisibbility: 'none'
    }
  }

  componentWillMount () {
    this.state.song = new SoundPlayer(states.questionary[0].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
  }

  pauseToPlay () {
    this.setState({
      playVisibility: 'flex',
      pauseVisibbility: 'none'
    })
  }

  play () {
    if (this.state.song !== null) {
      this.state.song.play((succes) => {
        if (succes) {
          this.pauseToPlay()
        }
      })
    }
    this.setState({
      playVisibility: 'none',
      pauseVisibbility: 'flex'
    })
  }

  pause () {
    if (this.state.song !== null) {
      this.state.song.pause((succes) => {
        if (!succes) {
          console.log('Error en reproducción')
        }
      })
    }
    this.pauseToPlay()
  }

  stop () {
    if (this.state.song !== null) {
      this.state.song.play()
      this.state.song.stop((succes) => {
        if (!succes) {
          this.pauseToPlay()
        }
      })
    }
  }

  changeQuestion (id) {
    this.setState({ index: id })
    delete this.state.song
    this.state.song = new SoundPlayer(states.questionary[id].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
    console.log(this.state.song)
  }

  render () {
    return (
      <Container>
        <Content style={styles.container}>
          <ImageBackground source={require('../assets/images/Fondo-aplicacion-1.jpg')} style={styles.background}>
            <View style={{ height: height }}>
              <Card transparent>
                <CardItem style={styles.cardItem}>
                  <Image source={textBox} style={styles.image} />
                  <Text style={styles.title}>Español</Text>
                  <Text style={[styles.cardText]}>{states.questionary[this.state.index].spanishText}</Text>
                </CardItem>
              </Card>

              <Card transparent>
                <CardItem style={styles.cardItem}>
                  <Image source={textBox} style={styles.image} />
                  <Text style={styles.title}>Maya</Text>
                  <Text style={styles.cardText}>{states.questionary[this.state.index].mayanText}</Text>
                </CardItem>
              </Card>

              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button
                  transparent
                  onPress={() => this.play()}
                  style={{ width: 80, height: 80, display: this.state.playVisibility }}
                >
                  <Image source={playButtom} style={styles.imageButton} /></Button>
                <Button
                  transparent
                  onPress={() => this.pause()}
                  style={{ width: 80, height: 80, display: this.state.pauseVisibbility }}
                >
                  <Image source={pauseButtom} style={styles.imageButton} /></Button>
                <Button
                  transparent
                  onPress={() => this.stop()}
                  style={{ width: 80, height: 80 }}
                >
                  <Image source={stopButtom} style={styles.imageButton} /></Button>
              </View>
              {states.questionary[this.state.index].options.map((selection, key) => {
                return (
                  <View key={key} style={{ marginTop: 24 }}>
                    <Button onPress={() => this.changeQuestion(selection.nextID)} style={{ alignSelf: 'center' }} >
                      <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{selection.title}</Text>
                    </Button>
                  </View>
                )
              })}
            </View>
          </ImageBackground>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 620

  },
  background: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  imageButton: {
    width: 80,
    height: 80
  },
  playerButtom: {
    width: 80,
    height: 80
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute'
  },
  cardItem: {
    paddingTop: 32,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    fontWeight: '900',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: '25%',
    marginLeft: 24
  },
  cardText: {
    color: '#FFFFFF',
    fontWeight: '900',
    marginLeft: -40,
    fontSize: 16,
    marginRight: 40,
    maxWidth: 300
  }
})

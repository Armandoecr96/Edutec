/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import states from './states/BloodTestStates'
var SoundPlayer = require('react-native-sound');
import { Container, Content, Card, CardItem } from 'native-base';
import textBox from '../assets/images/caja-de-texto-1.png'

export default class BloodTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      pause: false,
      song: null
    }
  }

  componentWillMount() {
    this.state.song = new SoundPlayer(states.questionary[0].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });
  }

  play() {
    if (this.state.song !== null) {
      this.state.song.play((succes) => {
        if (!succes) {
          console.log('Error en reproducción')
        }

      })
    }
  }

  pause() {
    if (this.state.song !== null) {
      this.state.song.pause((succes) => {
        if (!succes) {
          console.log('Error en reproducción')
        }

      })
    }
  }

  stop() {
    if (this.state.song !== null) {
      this.state.song.stop((succes) => {
        if (!succes) {
          console.log('Error en reproducción')
        }

      })
    }
  }

  changeQuestion(id) {
    this.setState({ index: id })
    delete this.state.song
    this.state.song = new SoundPlayer(states.questionary[id].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });
    console.log(this.state.song)
  }

  render() {

    return (
      <Container>
        <Content style={styles.container}>
          <ImageBackground source={require('../assets/images/Fondo-aplicacion-1.jpg')} style={styles.background}>
            <View style={{height: 620}}>
              <Card transparent>
                <CardItem style={styles.cardItem}>
                  <Image source={textBox} style={styles.image} />
                  <Text style={styles.title}>Español</Text>
                  <Text style={[styles.cardText]}>{states.questionary[this.state.index].spanishText}</Text>
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <Image source={textBox} style={styles.image} />
                  <Text style={styles.title}>Maya</Text>
                  <Text style={styles.cardText}>{states.questionary[this.state.index].mayanText}</Text>
                </CardItem>
              </Card>

              <View style={{ display: 'flex', flexDirection: 'column' }}>
                <Button
                  onPress={() => this.play()}
                  title="Play"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                  style={{ width: '30%' }}
                />
                <Button
                  onPress={() => this.pause()}
                  title="Pause"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
                <Button
                  onPress={() => this.stop()}
                  title="Stop"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
              {states.questionary[this.state.index].options.map((selection, key) => {
                return (
                  <View key={key}>
                    <Button title={selection.title} onPress={() => this.changeQuestion(selection.nextID)} />
                  </View>
                )
              })}
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 340,
    resizeMode: 'contain',
    position: 'absolute'
  },
  cardItem: {
    paddingTop: 32,
    marginLeft: 10,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  title: {
    color: 'black',
    fontWeight: '900',
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 80,
    marginLeft: 24
  },
  cardText: {
    color: '#FFFFFF',
    fontWeight: '900',
    marginLeft: -40,
    fontSize: 16,
    marginRight: 40
  }
});

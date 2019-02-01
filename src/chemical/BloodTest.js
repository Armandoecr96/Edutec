/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import states from './states/BloodTestStates'
var SoundPlayer = require('react-native-sound');
var song = null

export default class BloodTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      pause: false
    }
  }

  componentWillMount() {
    song = new SoundPlayer(states.questionary[0].audio, null, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log('duration in seconds: ' + song.getDuration() + 'number of channels: ' + song.getNumberOfChannels());

    });
  }

  play() {
    if(song !== null){
      song.play((succes) => {
        if(!succes){
          console.log('Error en reproducción')
        }

      })
    }
  }

  pause() {
    if(song !== null){
      song.pause((succes) => {
        if(!succes){
          console.log('Error en reproducción')
        }

      })
    }
  }

  stop() {
    if(song !== null){
      song.stop((succes) => {
        if(!succes){
          console.log('Error en reproducción')
        }

      })
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{
          states.questionary[this.state.index].spanishText
        }</Text>
        <Text style={styles.instructions}>{states.questionary[this.state.index].mayanText}</Text>
        <Button
          onPress={() => this.play()}
          title="Play"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

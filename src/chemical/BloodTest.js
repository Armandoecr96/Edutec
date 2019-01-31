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
import Sound from 'react-native-sound'
import SoundPlayer from 'react-native-sound-player'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state={
      index: 0
    }
  }

  play = (audio) => {
    try {
      // or play from url
      SoundPlayer.playSoundFile(audio, 'm4a')
  } catch (e) {
      console.log(`cannot play the sound file`, e)
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
          onPress={() => this.play(states.questionary[this.state.index].audio, this)}
          title="Play"
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

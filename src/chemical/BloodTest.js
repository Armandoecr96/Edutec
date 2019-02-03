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
        {states.questionary[this.state.index].options.map((selection, key) => {
          return (
            <Button title={selection.title} key={key} onPress={() => this.changeQuestion(selection.nextID)} />
          )
        })}
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

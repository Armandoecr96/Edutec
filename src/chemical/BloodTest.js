/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native'
import states from './states/BloodTestStates'
import { Container, Content, Card, CardItem } from 'native-base'
import textBox from '../assets/images/caja-de-texto-1.png'
import moment  from "moment";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { bold } from 'ansi-colors';
var SoundPlayer = require('react-native-sound')


export default class BloodTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      pause: false,
      song: null,
      isVisible: false,
      dateChoose: "",
      time: "",
      verificacion:false
    }
  }

  componentWillMount() {
    this.state.song = new SoundPlayer(states.questionary[0].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
  }

  handlerPicker = (datetime) => {
    this.setState({
      isVisible:false,
      dateChoose: moment(datetime, "MMMM, Do YYYY HH:mm").fromNow()
    })

    var regex = /(\d+)/g;
    var hour = this.state.dateChoose.match(regex);
    this.verificacionDate(hour);
  }

  verificacionDate = (time) => {
    var hour = parseInt(time[0]);

    if (hour >= 8) {
      this.setState({
        time: "Han pasado " + hour + " horas",
        verificacionDate: true
      })
    }
    if (hour < 8 && hour >= 1) {
      this.setState({
        time: "Han pasado " + hour + " horas",
        verificacionDate: false
      })
      
    }
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }

  showPicker = () => {
    this.setState({
      isVisible: true
    })
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
    this.setState({ index: id, time: "" })
    delete this.state.song
    this.state.song = new SoundPlayer(states.questionary[id].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      }
    })
    console.log(this.state.song)
  }

  render() {
    // this.setState({
    //   hora: states.questionary[this.state.index].hora
    // })
    return (
      <Container>
        <Content style={styles.container}>
          <ImageBackground source={require('../assets/images/Fondo-aplicacion-1.jpg')} style={styles.background}>
            <View style={{ height: 620 }}>
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

              <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize:17, fontWeight: 'bold'}}>{this.state.time}</Text>

              <View style={{ display: 'flex', flexDirection: 'column' }}>
                
                {states.questionary[this.state.index].hora ?
                  <View>
                    <TouchableOpacity style={styles.button} onPress={this.showPicker}>
                      <Text style={styles.text}>Ingrese Hora</Text>
                    </TouchableOpacity>
                    <DateTimePicker 
                    isVisible={this.state.isVisible} 
                    onConfirm={this.handlerPicker} 
                    onCancel={this.hidePicker} 
                    maximumDate = {new Date()}
                    mode={'datetime'} />
                  </View>
                  :
                  null}

                <Button
                  onPress={() => this.play()}
                  title='Reproducir'
                  color='#841584'
                  accessibilityLabel='Learn more about this purple button'
                  style={{ width: '30%' }}
                />
                <Button
                  onPress={() => this.pause()}
                  title='Pausa'
                  color='#841584'
                  accessibilityLabel='Learn more about this purple button'
                />
                <Button
                  onPress={() => this.stop()}
                  title='Stop'
                  color='#841584'
                  accessibilityLabel='Learn more about this purple button'
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
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
  },
  button:{
    width: "100%",
    height: 50,
    backgroundColor: '#330066',
    justifyContent: 'center',
    marginTop: 15
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }


})

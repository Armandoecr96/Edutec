import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import states from './states/BloodTestStates'
import { Container, Content, Card, CardItem, Button } from 'native-base'
import textBox from '../assets/images/box.png'
import yesButton from '../assets/images/si.png'
import noButton from '../assets/images/no.png'
import nextButton from '../assets/images/siguiente.png'
import previewButtom from '../assets/images/atras.png'
import moment from "moment";
var SoundPlayer = require('react-native-sound')
import playButtom from '../assets/images/play.png'
import pauseButtom from '../assets/images/pausa.png'
import stopButtom from '../assets/images/stop.png'
import DatePicker from 'react-native-datepicker'
var SoundPlayer = require('react-native-sound')

var { height, width } = Dimensions.get('window');

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
      date: new Date(),
      verificacion: false,
      playVisibility: 'flex',
      pauseVisibbility: 'none'
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
      isVisible: false,
      date: datetime,
      dateChoose: moment(datetime, "YYYY-MM-DD HH:mm").utc().startOf('hour').fromNow()
    })
    this.verificacionDate(this.state.dateChoose);
  }

  verificacionDate = (time) => {
    var hour = ''
    var verificacionDate = false
    if (time.includes('day') || time.includes('days')) {
      this.setState({
        time: "Ha pasado más de un día"
      })
      verificacionDate = 'yes'
    }
    if (time === 'an hour ago') {
      hour = 1
    } else {
      let obtainHours = time.split(' ')
      hour = parseInt(obtainHours[0])
    }
    if (hour > 10) {
      this.setState({
        time: "Han pasado " + hour + " hora(s)",
      })
      verificacionDate = 'yes'
    }
    if (hour <= 10 && hour >= 8) {
      this.setState({
        time: "Han pasado " + hour + " hora(s)",
      })
      verificacionDate = 'wait'
    }
    if (hour < 8) {
      this.setState({
        time: "Han pasado " + hour + " hora(s)",
      })
      verificacionDate = 'no'
    }
    if (verificacionDate === 'yes') {
      setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[0].nextYes }), 5000)
    }

    if (verificacionDate === 'wait') {
      setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[0].nextProp }), 5000)
    }

    if (verificacionDate === 'no') {
      setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[0].nextNo }), 5000)
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

  pauseToPlay() {
    this.setState({
      playVisibility: 'flex',
      pauseVisibbility: 'none'
    })
  }

  play() {
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

  pause() {
    if (this.state.song !== null) {
      this.state.song.pause((succes) => {
        if (!succes) {
          console.log('Error en reproducción')
        }
      })
    }
    this.pauseToPlay()
  }

  stop() {
    if (this.state.song !== null) {
      this.state.song.play()
      this.state.song.stop((succes) => {
        if (!succes) {
          this.pauseToPlay()
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
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground source={require('../assets/images/bg1.jpg')} style={styles.background}>
            <View style={{ height: height, marginBottom: 88 }}>
              <Card transparent style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image source={textBox} style={styles.cardImage} />
                  <Text style={styles.title}>Español</Text>
                  <Text style={[styles.cardText, styles.ajuste]}>{states.questionary[this.state.index].spanishText}</Text>
                </CardItem>
              </Card>

              <Card transparent style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Image source={textBox} style={styles.cardImage} />
                  <Text style={styles.title}>Maya</Text>
                  <Text style={styles.cardText}>{states.questionary[this.state.index].mayanText}</Text>
                </CardItem>
              </Card>

              <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 17, fontWeight: 'bold' }}>{this.state.time}</Text>

              <View style={{ display: 'flex', flexDirection: 'column' }}>

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
                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  {states.questionary[this.state.index].options.map((selection, key) => {
                    return (
                      selection.title === 'Si' ?
                        <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={styles.buttonDecision} >
                          <Image source={yesButton} style={styles.imageButton} />
                        </Button>
                        : selection.title === 'No'
                          ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={styles.buttonDecision} >
                            <Image source={noButton} style={styles.imageButton} />
                          </Button>
                          : selection.title === 'Siguiente' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={{ margin: 8, padding: 8, marginBottom: 16 }} >
                            <Image source={nextButton} style={{ height: 80, width: 124 }} />
                          </Button>
                            : selection.title === 'Atras' ? <Button onPress={() => this.changeQuestion(selection.nextID)} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                              <Image source={previewButtom} style={{ height: 80, width: 124 }} />
                            </Button>
                              : selection.title === 'Hora' ? <DatePicker
                                key={key}
                                style={{ width: 200 }}
                                date={this.state.date}
                                mode="datetime"
                                placeholder="select date"
                                format="YYYY-MM-DD HH:mm"
                                maxDate={new Date()}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                is24Hour={true}
                                customStyles={{
                                  dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                  },
                                  dateInput: {
                                    color: '#FFFFFF',
                                    marginLeft: 36
                                  }
                                }}
                                onDateChange={this.handlerPicker}
                              />
                                : <Button key={key} onPress={() => this.changeQuestion(selection.nextID)} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                  <Text style={{ color: '#FFFFFF' }}>{selection.title}</Text>
                                </Button>
                    )
                  })}
                </View>
              </View>
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
    backgroundColor: '#F5FCFF'
  },
  background: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
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
  card: {
    width: '100%'
  },
  cardItem: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  cardImage: {
    width: '100%',
    resizeMode: 'stretch'
  },
  ajuste: {
    marginLeft: -90
  },
  title: {
    marginLeft: '-90%',
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 24,
    marginTop: -120
  },
  cardText: {
    color: '#FFFFFF',
    fontWeight: '900',
    marginLeft: -40,
    fontSize: 24,
    marginRight: 40,
    marginTop: 48,
    width: '80%'
  },
  button: {
    width: null,
    height: 60,
    backgroundColor: '#330066',
    justifyContent: 'center',
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    maxWidth: '80%',
    padding: 8,
    alignItems: 'center'
  },
  buttonDecision: {
    marginRight: 8,
    marginBottom: 16,
    width: 80,
    height: 70
  }


})

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import states from './states/PreviewStates'
import { Container, Content, Card, CardItem, Button } from 'native-base'
import textBox from '../assets/images/box.png'
import yesButton from '../assets/images/si.png'
import noButton from '../assets/images/no.png'
import nextButton from '../assets/images/siguiente.png'
import previewButtom from '../assets/images/atras.png'
import moment from "moment";
import SoundPlayer from 'react-native-sound'
import playButtom from '../assets/images/play.png'
import pauseButtom from '../assets/images/pausa.png'
import stopButtom from '../assets/images/stop.png'
import DatePicker from 'react-native-datepicker'
import salirButtom from '../assets/images/salida.png'

var { height, width } = Dimensions.get('window');

export default class BloodTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            pause: false,
            song: null,
            yesAudio: null,
            noAudio: null,
            isVisible: false,
            dateChoose: "",
            time: "",
            date: new Date(),
            verificacion: false,
            playVisibility: 'flex',
            pauseVisibbility: 'none',
            playVisibilityYes: 'flex',
            playVisibilityNo: 'flex',
            pauseVisibbilityYes: 'none',
            pauseVisibbilityNo: 'none'
        }
    }

    componentWillMount() {
        this.state.song = new SoundPlayer(states.questionary[0].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
        this.state.yesAudio = new SoundPlayer('audio23.m4a', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
        this.state.noAudio = new SoundPlayer('audio24.m4a', SoundPlayer.MAIN_BUNDLE, (error) => {
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
            setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[1].nextYes }), 5000)
        }

        if (verificacionDate === 'wait') {
            setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[1].nextProp }), 5000)
        }

        if (verificacionDate === 'no') {
            setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[1].nextNo }), 5000)
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

    play(option) {
        if (option === undefined) {
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
        } else {
            if (option) {
                this.state.yesAudio.play((succes) => {
                    if (succes) {
                        this.setState({
                            playVisibilityYes: 'flex',
                            pauseVisibbilityYes: 'none'
                        })
                    }
                })
                this.setState({
                    playVisibilityYes: 'none',
                    pauseVisibbilityYes: 'flex'
                })
            } else {
                this.state.noAudio.play((succes) => {
                    if (succes) {
                        this.setState({
                            playVisibilityNo: 'flex',
                            pauseVisibbilityNo: 'none'
                        })
                    }
                })
                this.setState({
                    playVisibilityNo: 'none',
                    pauseVisibbilityNo: 'flex'
                })
            }
        }
    }

    pause(option) {
        if (option === undefined) {
            if (this.state.song !== null) {
                this.state.song.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
            }
            this.pauseToPlay()
        } else {
            if (option) {
                this.state.yesAudio.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
                this.setState({
                    playVisibilityYes: 'flex',
                    pauseVisibbilityYes: 'none'
                })
            } else {
                this.state.noAudio.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
                this.setState({
                    playVisibilityNo: 'flex',
                    pauseVisibbilityNo: 'none'
                })
            }
        }
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

    playMedia = (option) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button
                    transparent
                    onPress={() => this.play(option ? true : false)}
                    style={{ width: 40, height: 40, display: option ? this.state.playVisibilityYes : this.state.playVisibilityNo }}
                >
                    <Image source={playButtom} style={{ width: 30, height: 30 }} /></Button>
                <Button
                    transparent
                    onPress={() => this.pause(option ? true : false)}
                    style={{ width: 40, height: 40, display: option ? this.state.pauseVisibbilityYes : this.state.pauseVisibbilityNo }}
                >
                    <Image source={pauseButtom} style={{ width: 30, height: 30 }} /></Button>
            </View>
        )
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
                                    <Text style={[styles.cardText, styles.ajuste]}>{states.questionary[this.state.index].spanishText ? states.questionary[this.state.index].spanishText : ''}</Text>
                                </CardItem>
                            </Card>

                            {states.questionary[this.state.index].mayan !== false && <Card transparent style={styles.card}>
                                <CardItem style={styles.cardItem}>
                                    <Image source={textBox} style={styles.cardImage} />
                                    <Text style={styles.title}>Maya</Text>
                                    <Text style={styles.cardText}>{states.questionary[this.state.index].mayanText ? states.questionary[this.state.index].mayanText : ''}</Text>
                                </CardItem>
                            </Card>}

                            <Text style={{ textAlign: "center", color: "#FFFFFF", fontSize: 17, fontWeight: 'bold' }}>{this.state.time}</Text>

                            <View style={{ display: 'flex', flexDirection: 'column' }}>

                                {states.questionary[this.state.index].mayan !== false && <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
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
                                </View>}
                                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                                    {states.questionary[this.state.index].options.map((selection, key) => {
                                        return (
                                            selection.title === 'Si' ?
                                                <View>
                                                    <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={styles.buttonDecision} >
                                                        <Image source={yesButton} style={styles.imageButton} />
                                                    </Button>
                                                    {this.playMedia(true)}
                                                </View>
                                                : selection.title === 'No'
                                                    ? <View><Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={styles.buttonDecision} >
                                                        <Image source={noButton} style={styles.imageButton} />
                                                    </Button>
                                                        {this.playMedia(false)}
                                                    </View>
                                                    : selection.title === 'Siguiente' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={{ margin: 8, padding: 8, marginBottom: 16 }} >
                                                        <Image source={nextButton} style={{ height: 80, width: 124 }} />
                                                    </Button>
                                                        : selection.title === 'Atrás' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.backID)} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                                            <Image source={previewButtom} style={{ height: 80, width: 124 }} />
                                                        </Button>
                                                            : selection.title === 'Salir' ? <Button transparent key={key} onPress={() => this.props.navigation.navigate('HomeChemical')} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                                                <Image source={salirButtom} style={{ height: 80, width: 124 }} />
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
                                                                            marginRight: 16
                                                                        },
                                                                        dateText: {
                                                                            color: '#FFFFFF',
                                                                        }

                                                                    }}
                                                                    onDateChange={this.handlerPicker}
                                                                />
                                                                    : <Button
                                                                        transparent key={key}
                                                                        onPress={() => this.changeQuestion(selection.nextID)}
                                                                    >
                                                                        <View>
                                                                            <Image source={selection.src} style={styles.imageButtonDecision} />
                                                                        </View>
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
    },
    buttonDecision: {
        marginRight: 8,
        marginBottom: 16,
        width: 80,
        height: 70,
    },
    buttonDecisionDrink: {
        display: 'flex',
        marginRight: 8,
        marginBottom: 16,
        marginTop: 8
    },
    imageButton: {
        width: 80,
        height: 80
    },
    imageButtonDecision: {
        width: 100,
        height: 70
    }
})

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import states from './states/PreviewStates'
import { Container, Content, Card, CardItem, Button } from 'native-base'
import textBox from '../assets/images/box.png'
import yesButton from '../assets/images/si.png'
import noButton from '../assets/images/no.png'
import moment from "moment";
import SoundPlayer from 'react-native-sound'
import playButtom from '../assets/images/play.png'
import pauseButtom from '../assets/images/pausa.png'
import stopButtom from '../assets/images/stop.png'
import DatePicker from 'react-native-datepicker'
import RenderButtonsPQ from './utils/RenderButtons'

var { height } = Dimensions.get('window');

export default class BloodTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            pause: false,
            song: null,
            correrAudio: null,
            caminarAudio: null,
            estirarAudio: null,
            yesAudio: null,
            yesAyunoAudio: null,
            noAudio: null,
            noAyunoAudio: null,
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
            pauseVisibbilityNo: 'none',
            playVisibilityCorrer: 'flex',
            playVisibilityCaminar: 'flex',
            playVisibilityEstirar: 'flex',
            pauseVisibbilityCorrer: 'none',
            pauseVisibbilityCaminar: 'none',
            pauseVisibbilityEstirar: 'none'
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
        this.state.yesAyunoAudio = new SoundPlayer('voz56.3gp', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
        this.state.noAyunoAudio = new SoundPlayer('voz57.3gp', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
        this.state.correrAudio = new SoundPlayer('audio18.m4a', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
        this.state.caminarAudio = new SoundPlayer('audio8.m4a', SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
        this.state.estirarAudio = new SoundPlayer('audio19.m4a', SoundPlayer.MAIN_BUNDLE, (error) => {
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
            // setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[1].nextYes }), 5000)
            setTimeout(() => this.changeQuestion(states.questionary[this.state.index].options[1].nextYes), 5000)

        }

        if (verificacionDate === 'wait') {
            // setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[1].nextProp }), 5000)
            setTimeout(() => this.changeQuestion(states.questionary[this.state.index].options[1].nextProp), 5000)
        }

        if (verificacionDate === 'no') {
            // setTimeout(() => this.setState({ index: states.questionary[this.state.index].options[1].nextNo }), 5000)
            setTimeout(() => this.changeQuestion(states.questionary[this.state.index].options[1].nextNo), 5000)

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

    pauseOption(selection) {

        switch (selection) {
            case "correr":
                this.state.correrAudio.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
                this.setState({
                    playVisibilityCorrer: 'flex',
                    pauseVisibbilityCorrer: 'none'
                })
                break;
            case "cami":
                this.state.caminarAudio.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
                this.setState({
                    playVisibilityCaminar: 'flex',
                    pauseVisibbilityCaminar: 'none'
                })
                break;
            case "estirar":
                this.state.estirarAudio.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
                this.setState({
                    playVisibilityEstirar: 'flex',
                    pauseVisibbilityEstirar: 'none'
                })
                break;
        }
    }

    playOption(selection) {
        console.log(selection)
        switch (selection) {
            case 'correr':
                this.state.correrAudio.play((succes) => {
                    if (succes) {
                        this.setState({
                            playVisibilityCorrer: 'flex',
                            pauseVisibbilityCorrer: 'none'
                        })
                    }
                })
                this.setState({
                    playVisibilityCorrer: 'none',
                    pauseVisibbilityCorrer: 'flex'
                })
                break;
            case 'cami':
                this.state.caminarAudio.play((succes) => {
                    if (succes) {
                        this.setState({
                            playVisibilityCaminar: 'flex',
                            pauseVisibbilityCaminar: 'none'
                        })
                    }
                })
                this.setState({
                    playVisibilityCaminar: 'none',
                    pauseVisibbilityCaminar: 'flex'
                })
                break;
            case 'estirar':
                this.state.estirarAudio.play((succes) => {
                    if (succes) {
                        this.setState({
                            playVisibilityEstirar: 'flex',
                            pauseVisibbilityEstirar: 'none'
                        })
                    }
                })
                this.setState({
                    playVisibilityEstirar: 'none',
                    pauseVisibbilityEstirar: 'flex'
                })
                break;
        }
    }


    play(option, isAyuno) {
        if (option === undefined) {
            if (this.state.song !== null) {
                this.state.song.play((succes) => {
                    if (succes) {
                        this.pauseToPlay()
                    } else {
                        console.log('Error')
                    }
                })
            }
            this.setState({
                playVisibility: 'none',
                pauseVisibbility: 'flex'
            })
        } else {
            var yesAudio;
            var noAudio;

            if (isAyuno === true && isAyuno !== null && isAyuno !== undefined) {
                yesAudio = this.state.yesAyunoAudio
                noAudio = this.state.noAyunoAudio
            }
            else {
                yesAudio = this.state.yesAudio
                noAudio = this.state.noAudio
            }

            if (option) {
                yesAudio.play((succes) => {
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
                noAudio.play((succes) => {
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

    pause(option, isAyuno) {
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

            var yesAudio;
            var noAudio

            if (isAyuno === true && isAyuno !== null && isAyuno !== undefined) {
                yesAudio = this.state.yesAyunoAudio
                noAudio = this.state.noAyunoAudio
            }
            else {
                yesAudio = this.state.yesAudio
                noAudio = this.state.noAudio
            }
            if (option) {
                yesAudio.pause((succes) => {
                    if (!succes) {
                        console.log('Error en reproducción')
                    }
                })
                this.setState({
                    playVisibilityYes: 'flex',
                    pauseVisibbilityYes: 'none'
                })
            } else {
                noAudio.pause((succes) => {
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

    changeQuestion = (id) => {
        this.setState({ index: id, time: "" })
        delete this.state.song
        this.state.song = new SoundPlayer(states.questionary[id].audio, SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
            }
        })
    }

    playMedia = (option, isAyuno) => {
        return (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button
                    transparent
                    onPress={() => this.play(option ? true : false, isAyuno)}
                    style={{ width: 40, height: 40, display: option ? this.state.playVisibilityYes : this.state.playVisibilityNo }}
                >
                    <Image source={playButtom} style={{ width: 30, height: 30 }} /></Button>
                <Button
                    transparent
                    onPress={() => this.pause(option ? true : false, isAyuno)}
                    style={{ width: 40, height: 40, display: option ? this.state.pauseVisibbilityYes : this.state.pauseVisibbilityNo }}
                >
                    <Image source={pauseButtom} style={{ width: 30, height: 30 }} /></Button>
            </View>
        )
    }

    playMediaOption = (selection) => {
        switch (selection) {
            case "correr":
                return (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button
                            transparent
                            onPress={() => this.playOption(selection)}
                            style={{ width: 40, height: 40, display: this.state.playVisibilityCorrer }}
                        >
                            <Image source={playButtom} style={{ width: 30, height: 30 }} /></Button>
                        <Button
                            transparent
                            onPress={() => this.pauseOption(selection)}
                            style={{ width: 40, height: 40, display: this.state.pauseVisibbilityCorrer }}
                        >
                            <Image source={pauseButtom} style={{ width: 30, height: 30 }} /></Button>
                    </View>
                )
                break;
            case "cami":
                return (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button
                            transparent
                            onPress={() => this.playOption(selection)}
                            style={{ width: 40, height: 40, display: this.state.playVisibilityCaminar }}
                        >
                            <Image source={playButtom} style={{ width: 30, height: 30 }} /></Button>
                        <Button
                            transparent
                            onPress={() => this.pauseOption(selection)}
                            style={{ width: 40, height: 40, display: this.state.pauseVisibbilityCaminar }}
                        >
                            <Image source={pauseButtom} style={{ width: 30, height: 30 }} /></Button>
                    </View>
                )

                break;
            case "estirar":
                return (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Button
                            transparent
                            onPress={() => this.playOption(selection)}
                            style={{ width: 40, height: 40, display: this.state.playVisibilityEstirar }}
                        >
                            <Image source={playButtom} style={{ width: 30, height: 30 }} /></Button>
                        <Button
                            transparent
                            onPress={() => this.pauseOption(selection)}
                            style={{ width: 40, height: 40, display: this.state.pauseVisibbilityEstirar }}
                        >
                            <Image source={pauseButtom} style={{ width: 30, height: 30 }} /></Button>
                    </View>
                )

                break;
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground resizeMode={'stretch'} source={require('../assets/images/bg1.jpg')} style={styles.background}>
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
                                                    {this.state.index !== 6 ? this.playMedia(true, false) : this.playMedia(false, true)}
                                                </View>
                                                : selection.title === 'No'
                                                    ? <View><Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={styles.buttonDecision} >
                                                        <Image source={noButton} style={styles.imageButton} />
                                                    </Button>
                                                        {this.state.index !== 6 ? this.playMedia(false, false) : this.playMedia(true, true)}
                                                    </View>
                                                    : selection.title === 'Siguiente' || selection.title === 'Atrás' || selection.title === 'Salir' ?
                                                        <RenderButtonsPQ
                                                            title={selection.title}
                                                            handleChangeQuestion={this.changeQuestion}
                                                            nextID={selection.nextID}
                                                            backID={selection.backID}
                                                            exit={this.props.navigation.navigate}
                                                        />
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
                                                            :
                                                            selection.title === "correr" ?
                                                                <View>
                                                                    <Button
                                                                        transparent key={key}
                                                                        onPress={() => this.changeQuestion(selection.nextID)}
                                                                    >
                                                                        <View>
                                                                            <Image source={selection.src} style={styles.imageButtonDecision} />
                                                                        </View>
                                                                    </Button>
                                                                    {this.playMediaOption("correr")}
                                                                </View>
                                                                :
                                                                selection.title === "caminar" ?
                                                                    <View>
                                                                        <Button
                                                                            transparent key={key}
                                                                            onPress={() => this.changeQuestion(selection.nextID)}
                                                                        >
                                                                            <Image source={selection.src} style={styles.imageButtonDecision} />
                                                                        </Button>
                                                                        {this.playMediaOption("cami")}
                                                                    </View>
                                                                    :
                                                                    selection.title === "estiramiento" ?
                                                                        <View>
                                                                            <Button
                                                                                transparent key={key}
                                                                                onPress={() => this.changeQuestion(selection.nextID)}
                                                                            >
                                                                                <Image source={selection.src} style={styles.imageButtonDecision} />
                                                                            </Button>
                                                                            {this.playMediaOption("estirar")}
                                                                        </View>

                                                                        :

                                                                        <Button
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
        flex: 1,
        paddingBottom: height*.08
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

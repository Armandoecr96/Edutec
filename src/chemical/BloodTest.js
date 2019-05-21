import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import states from './states/BloodTestStates'
import { Container, Content, Card, CardItem, Button } from 'native-base'
import textBox from '../assets/images/box.png'
import nextButton from '../assets/images/siguiente.png'
import previewButtom from '../assets/images/atras.png'
import SoundPlayer from 'react-native-sound'
import playButtom from '../assets/images/play.png'
import pauseButtom from '../assets/images/pausa.png'
import stopButtom from '../assets/images/stop.png'
import salirButtom from '../assets/images/salida.png'

var { height, width } = Dimensions.get('window');

export default class BloodTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            pause: false,
            song: null,
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
                        {
                            states.questionary[this.state.index].spanishText !== null
                                ? (
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
                                                        selection.title === 'Siguiente' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={{ margin: 8, padding: 8, marginBottom: 16 }} >
                                                            <Image source={nextButton} style={{ height: 80, width: 124 }} />
                                                        </Button>
                                                            : selection.title === 'Atras' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.backID)} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                                                <Image source={previewButtom} style={{ height: 80, width: 124 }} />
                                                            </Button>
                                                                : selection.title === 'Salir' ? <Button transparent key={key} onPress={() => this.props.navigation.navigate('HomeChemical')} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                                                    <Image source={salirButtom} style={{ height: 80, width: 124 }} />
                                                                </Button> : null
                                                    )
                                                })}
                                            </View>
                                        </View>
                                    </View>
                                )
                                : <View style={{ height: height, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                    {
                                        this.state.index === 1
                                            ? <Image style={styles.gif} source={require('../assets/images/alargar.gif')} />
                                            : this.state.index === 5
                                                ? <Image style={styles.gif} source={require('../assets/images/cerrar.gif')} />
                                                : this.state.index === 8
                                                    ? <Image style={styles.gif} source={require('../assets/images/a21.gif')} />
                                                    : this.state.index === 10 ?
                                                        <Image style={styles.gif} source={require('../assets/images/abrir.gif')} />
                                                        : <Image style={styles.gif} source={require('../assets/images/encoger.gif')} />
                                    }

                                    <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        {states.questionary[this.state.index].options.map((selection, key) => {
                                            return (
                                                selection.title === 'Siguiente' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.nextID)} style={{ margin: 8, padding: 8, marginBottom: 16 }} >
                                                    <Image source={nextButton} style={{ height: 80, width: 124 }} />
                                                </Button>
                                                    : selection.title === 'Atras' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.backID)} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                                        <Image source={previewButtom} style={{ height: 80, width: 124 }} />
                                                    </Button>
                                                        : selection.title === 'Salir' ? <Button transparent key={key} onPress={() => this.changeQuestion(selection.backID)} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                                                            <Image source={salirButtom} style={{ height: 80, width: 124 }} />
                                                        </Button> : null
                                            )
                                        })}
                                    </View>
                                </View>
                        }

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
        height: 70,
    },
    gif: {
        width: '75%',
        height: '75%',
    }
})

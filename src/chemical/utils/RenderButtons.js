import React, { Component } from 'react'
import { Button } from 'native-base'
import { Image } from 'react-native'
import nextButton from '../../assets/images/siguiente.png'
import previewButtom from '../../assets/images/atras.png'
import salirButtom from '../../assets/images/salida.png'

export default class RenderButtonsPQ extends Component {

    selectImage = (title) => {
        return (
            <Image source={title === 'Siguiente' ? nextButton : previewButtom} style={{ height: 80, width: 124 }} />
        )
    }

    changeQuestion = (title, nextID, backID) => {
        title === 'Siguiente' ? nextID : backID
    }

    render() {
        const {
            title,
            handleChangeQuestion,
            nextID,
            backID,
            exit
        } = this.props

        return (
            title === 'Salir' ?
                <Button transparent onPress={() => exit('HomeChemical')} style={{ margin: 8, padding: 8, marginBottom: 16 }}>
                    <Image source={salirButtom} style={{ height: 80, width: 124 }} />
                </Button>
                : <Button transparent onPress={() => handleChangeQuestion(title === 'Siguiente' ? nextID : backID)} style={{ margin: 8, padding: 8, marginBottom: 16 }} >
                    {this.selectImage(title)}
                </Button>
        )
    }
}
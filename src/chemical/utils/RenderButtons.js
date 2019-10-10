import React, { Component } from 'react'
import { Button } from 'native-base'
import { Image } from 'react-native'
import nextButton from '../../assets/images/siguiente.png'
import previewButtom from '../../assets/images/atras.png'
import salirButtom from '../../assets/images/salida.png'

/**
 * @class RenderButtonsPQ
 * @description Botones para Siguiente, Salir y Anterior
 */
export default class RenderButtonsPQ extends Component {

    /**
     * @method selectImage
     * @param {string} title - Titulo de la opción
     * @memberof RenderButtonsPQ
     * @description Seleccion de la imagen que se va a tomar para el boton ya sea Atrás o Siguiente
     */
    selectImage = (title) => {
        return (
            <Image source={title === 'Siguiente' ? nextButton : previewButtom} style={{ height: 80, width: 124 }} />
        )
    }

    /**
     * @method changeQuestion
     * @param {string} title - Titulo de la opción
     * @param {int} nextID - ID o posición en el arreglo que sigue en el ciclo
     * @param {int} backID - ID o posición en el arreglo anterior en el ciclo
     * @memberof RenderButtonsPQ
     * @description Detecta cual es el elemento que sigue en el ciclo del arreglo
     */
    changeQuestion = (title, nextID, backID) => {
        title === 'Siguiente' ? nextID : backID
    }

    render() {
        const {
            title,
            handleChangeQuestion, // Función de la clase PreviewStates para cambiar de pregunta
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
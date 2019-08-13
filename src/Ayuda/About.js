import React, { Component } from 'react'
import { Container, Content, Accordion, Text } from 'native-base'

const dataArray = [
  { title: 'Descripción', content: 'Mayalab es resultado del proyecto “Desarrollo de una herramienta auxiliar en la comunicación paciente/QFB para la atención a comunidades mayas durante la toma de muestras biológicas” (clave SISTPROY FQUI-2018-0002), bajo la dirección de la M en C Lorena Evangelina Porras Suárez junto con la colaboración de las maestras Hilaria Máas Collí y M en C Martha Leticia Mena Reynoso, así como del Dr. José del Carmen Chin Vera.' },
  { title: 'Desarrollo', content: 'Mayalab fue desarrollado en la Facultad de Química de la Universidad Autónoma de Yucatán, como parte del proyecto de servicio social “Diseño de recursos didácticos para la educación en salud dirigido a población maya”. \n\n Licenciatura en Artes Visuales \n◾ Br. Azul del Carmen Gilabert Góngora \n◾ Br. Ignacio Merino Argáez \n\n Licenciatura en Ingeniería de Software \n◾ Br. Armando Enrique Carvajal Rivera \n◾ Br. Víctor Raúl Perera Rodríguez' },
]

class About extends Component {
  render () {
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            expanded={0}
            headerStyle={{
              backgroundColor: '#0078DA'
            }} />
        </Content>
      </Container>
    )
  }
}

export default About

import React, { Component } from 'react'
import { Container, Content, Accordion, Text } from 'native-base'

const dataArray = [
  { title: 'Descripción', content: 'Mayalab es un proyecto desarrollado para el servicio social de la Facultad de Química de la UADY dirigido por la maestra Lorena Porras y el maestro José Chin' },
  { title: 'Desarrollado por', content: 'Artes:\n  ◾ Azul del Carmen Gilabert Gongora\n  ◾ Ignacio Merino Argaez\nProgramación:\n  ◾Armando Enrique Carvajal Rivera\n  ◾Victor Raúl Perera Rodriguez\n' },
  { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
]

class Ayuda extends Component {
  render () {
    return (
      <Container>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            expanded={0}
            headerStyle={{
              backgroundColor: '#01447B'
            }} />
        </Content>
      </Container>
    )
  }
}

export default Ayuda

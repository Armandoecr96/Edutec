/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Image, View, Dimensions } from 'react-native'
import { Container, Content, Card, CardItem, Text } from 'native-base'
import PersonajesQuimicos from './assets/images/quimicos.jpg'
import { Overlay, Button } from 'react-native-elements'
import PersonajesRecepcion from './assets/images/recepcion.jpg'
import logo from './assets/images/logo.png'
import EnConstruccion from './assets/images/enconstruccion.jpg'

var { height } = Dimensions.get('window')

/**
 * @class Menu
 * @description Menú principal de la aplicación
 */
export default class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  render () {
    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.contentLogo}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>MayaLab</Text>
          </View>
          <Card style={{ borderRadius: 16 }}>
            <CardItem style={{ borderRadius: 16 }} cardBody button onPress={() => this.props.navigation.navigate('Chemical')}>
              <Image source={PersonajesQuimicos} style={styles.images} />
            </CardItem>
          </Card>
          <Card style={{ borderRadius: 16 }}>
            <CardItem cardBody style={{ borderRadius: 16 }} button onPress={() => this.setState({ isVisible: true })}>
              <Image source={PersonajesRecepcion} style={styles.images} />
            </CardItem>
          </Card>
          <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <Card style={{ borderRadius: 16, width: '45%' }}>
              <CardItem cardBody style={{ borderRadius: 16, backgroundColor: '#01447B', justifyContent: 'center' }} button onPress={() => this.props.navigation.navigate('About')}>
                <Text style={{ color: '#FFFFFF', fontSize: 32, alignSelf: 'center', padding: 8 }}>Acerca de</Text>
              </CardItem>
            </Card>
            <Card style={{ borderRadius: 16, width: '45%' }}>
              <CardItem cardBody style={{ borderRadius: 16, backgroundColor: '#01447B', justifyContent: 'center' }} button onPress={() => this.props.navigation.navigate('Ayuda')}>
                <Text style={{ color: '#FFFFFF', fontSize: 32, alignSelf: 'center', padding: 8 }}>Ayuda</Text>
              </CardItem>
            </Card>
          </View>
        </Content>
        <Overlay isVisible={this.state.isVisible} width={350} height={375}>
          <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'flex-end' }}>
              <Button title='x' type='clear' titleStyle={{ color: 'gray' }} onPress={() => this.setState({ isVisible: false })} />
            </View>
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                resizeMode={'cover'}
                source={EnConstruccion}
                style={{ height: 170, width: 300, borderRadius: 8 }} />
            </View>
          </View>
        </Overlay>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#E2E2E2'
  },
  images: {
    height: height * 0.32,
    width: null,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 16
  },
  logo: {
    height: 90,
    width: 90
  },
  logoText: {
    fontSize: 24,
    fontWeight: '900',
    marginLeft: 16
  },
  contentLogo: {
    padding: 16,
    marginLeft: '16%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  }
})

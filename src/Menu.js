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
import PersonajesRecepcion from './assets/images/recepcion.jpg'
import logo from './assets/images/logo.png'

var { height, width } = Dimensions.get('window');

export default class Menu extends Component {
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
            <CardItem cardBody style={{ borderRadius: 16 }} button onPress={() => alert('En Construcción')}>
              <Image source={PersonajesRecepcion} style={styles.images} />
            </CardItem>
          </Card>
          <Card style={{ borderRadius: 16 }}>
            <CardItem cardBody style={{ borderRadius: 16, backgroundColor: '#01447B', justifyContent: 'center' }} button onPress={() => this.props.navigation.navigate('Ayuda')}>
              <Text style={{ color: '#FFFFFF', fontSize: 32, alignSelf: 'center', padding: 8 }}>Acerca de</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#E2E2E2'
  },
  images: {
    height: height * .32,
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

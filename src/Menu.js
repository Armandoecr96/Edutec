/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Title, Text } from 'native-base'
import PersonajesQuimicos from './assets/images/quimicos.jpg'
import PersonajesRecepcion from './assets/images/recepcion.jpg'
import logo from './assets/images/logo.png'

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
            <CardItem cardBody style={{ borderRadius: 16, backgroundColor: '#01447B' }} button onPress={() => this.props.navigation.navigate('Ayuda')}>
              <Text style={{ color: '#FFFFFF', fontSize: 32, marginLeft: '28%', padding: 8 }}>Acerca de</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    backgroundColor: '#E2E2E2'
  },
  images: {
    height: 200,
    width: null,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 16
  },
  logo: {
    height: 100,
    width: 100
  },
  logoText: {
    fontSize: 24,
    fontWeight: '900'
  },
  contentLogo: {
    padding: 16,
    alignItems: 'center'
  }
})

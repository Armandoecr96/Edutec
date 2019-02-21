/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Toast, Body, Title } from 'native-base'
import PersonajesQuimicos from './assets/images/personajes_quimicos.jpg'

export default class Menu extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Edutec</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
          <Card style={{ borderRadius: 16 }}>
            <CardItem style={{ borderRadius: 16 }} cardBody button onPress={() => this.props.navigation.navigate('Chemical')}>
              <Image source={PersonajesQuimicos} style={styles.images} />
            </CardItem>
          </Card>
          <Card style={{ borderRadius: 16 }}>
            <CardItem cardBody style={{ borderRadius: 16 }} button onPress={() => alert('En Construcción')}>
              <Image source={PersonajesQuimicos} style={styles.images} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    display: 'flex'
  },
  images: {
    height: 200,
    width: null,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 16
  }
})

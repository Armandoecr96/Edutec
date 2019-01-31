/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base'
import { bold, gray } from 'ansi-colors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Edutec</Title>
          </Body>
        </Header>
        <Content>
          <Card style={{borderRadius: 16}}> 
            <CardItem style={{borderRadius: 16}}>
              <Left>
                <Body>
                  <Text style={{fontSize: 24}}>Quimico</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{borderRadius: 16}} cardBody  button onPress={() => this.props.navigation.navigate('Chemical')}>
              <Image source={{ uri: 'http://restauranteamodo.com/wp-content/uploads/2017/03/ScreenClip-e1489436607533-535x400.png' }} style={{ height: 200, width: null, flex: 1, resizeMode: 'contain' }} />
            </CardItem>
          </Card>
          <Card style={{borderRadius: 16}}>
            <CardItem style={{backgroundColor: 'gray', opacity: 0.5, borderTopStartRadius: 16, borderTopEndRadius: 16}}>
              <Left>
                <Body>
                  <Text style={{fontSize: 24}}>Recepción</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody style={{borderRadius: 16}}>
              <Image source={{ uri: 'http://restauranteamodo.com/wp-content/uploads/2017/03/ScreenClip-e1489436607533-535x400.png' }} style={{ height: 200, width: null, flex: 1, opacity: 0.5, resizeMode: 'contain'}} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

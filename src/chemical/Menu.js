/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Image, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Text, Card, CardItem, Icon, Left, Right } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import imageMuestraSanguinea from '../assets/images/gota.png'

var { height } = Dimensions.get('window')

export default class Menu extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground source={require('../assets/images/Fondo-aplicacion-1.jpg')} style={styles.background}>
            <Grid style={styles.grid}>
              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Card style={{ borderRadius: 8 }}>
                    <CardItem style={styles.cardItem} cardBody button onPress={() => this.props.navigation.navigate('BloodTest')}>
                      <Left>
                        <Image source={imageMuestraSanguinea} style={styles.image} />
                      </Left>
                      <Text style={{ fontSize: 16 }}>Muestra sanguinea</Text>
                      <Right>
                        <Icon name='arrow-forward' style={styles.icon} />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Card style={{ borderRadius: 8 }}>
                    <CardItem style={styles.cardItem} cardBody button onPress={() => this.props.navigation.navigate('Chemical')}>
                      <Image source={{ uri: 'http://restauranteamodo.com/wp-content/uploads/2017/03/ScreenClip-e1489436607533-535x400.png' }} style={styles.image} />
                      <Text style={{ fontSize: 16 }}>Cultivo microbiologico</Text>
                      <Right>
                        <Icon name='arrow-forward' style={styles.icon} />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
              </Row>

              <Row style={styles.row}>
                <Col style={styles.col}>
                  <Card style={{ borderRadius: 8 }}>
                    <CardItem style={styles.cardItem} cardBody button onPress={() => this.props.navigation.navigate('Chemical')}>
                      <Left>
                        <Image source={{ uri: 'http://restauranteamodo.com/wp-content/uploads/2017/03/ScreenClip-e1489436607533-535x400.png' }} style={styles.image} />
                      </Left>
                      <Text style={{ fontSize: 16 }}>Examen toxicologico</Text>
                      <Right>
                        <Icon name='arrow-forward' style={styles.icon} />
                      </Right>
                    </CardItem>
                  </Card>
                </Col>
              </Row>
            </Grid>
          </ImageBackground>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    // backgroundColor: '#000000',
    height: 100,
    margin: 8,
    padding: 8
  },
  col: {
    // backgroundColor: '#D59F0F',
    margin: 8
  },
  image: {
    height: 60,
    width: null,
    marginRight: 8,
    flex: 1,
    resizeMode: 'contain'
  },
  cardItem: {
    borderRadius: 8,
    height: 80,
    padding: 16,
    backgroundColor: '#D59F0F'
  },
  background: {
    flex: 1
  },
  grid: {
    flex: 1,
    height: height
  },
  icon: {
    color: '#000000'
  }
})

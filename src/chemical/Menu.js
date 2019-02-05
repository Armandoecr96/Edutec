/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Container, Header, Content, Text, Card, Title, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

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
        <Content>
          <Grid style={styles.grid}>
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Card style={{ borderRadius: 8 }}>
                  <CardItem style={styles.cardItem} cardBody button onPress={() => this.props.navigation.navigate('BloodTest')}>
                    <Left>
                      <Image source={{ uri: 'http://restauranteamodo.com/wp-content/uploads/2017/03/ScreenClip-e1489436607533-535x400.png' }} style={styles.image} />
                    </Left>
                    <Text style={{ fontSize: 16 }}>Muestra sanguinea</Text>
                    <Right>
                      <Icon name="arrow-forward" />
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
                    <Text style={{ fontSize: 16 }}>Cultivo microbiologico</Text>
                    <Right>
                      <Icon name="arrow-forward" />
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
                      <Icon name="arrow-forward" />
                    </Right>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    //backgroundColor: '#000000',
    height: 100,
    margin: 8,
    padding: 8
  },
  col: {
    //backgroundColor: '#D2D2D2',
    margin: 8
  },
  image: {
    height: 80,
    width: null,
    marginRight: 8,
    flex: 1,
    resizeMode: 'contain'
  },
  cardItem: {
    borderRadius: 8,
    height: 80,
    padding: 16
  }
});

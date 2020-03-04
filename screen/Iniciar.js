import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';
//En esta pantalla se muestran los datos que el usuario puso al iniciar sesión que son nombre y contraseña
//Autor:Martínez Garcia Diana America
class Iniciar extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header />
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem>
              <Text>Hola {this.props.route.params.nombres}</Text>
            </CardItem>
            <CardItem>
              <Text>Contraseña: {this.props.route.params.pass}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Iniciar;
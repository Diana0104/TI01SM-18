import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';
//En esta pantalla se da la opcion de registrarte si no tienes cuenta ya se con un correo o con cuenta de facebook o gmail
//Autor:Martínez Garcia Diana America
class Registro extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header />
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeholder='Nombre' />
                </Item>
                <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeholder='Apellido' />
                </Item>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name = 'user'></Icon>
                  <Input placeholder='Nombre de usuario' />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'MaterialCommunityIcons' name = 'email-open'></Icon>
                  <Input type='email' placeholder='Correo' />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button block primary style={misEstilos.content}><Text> Registrar </Text></Button>
            </CardItem>
            <CardItem><Text style={misEstilos.content}>O te puedes registrar con tu cuenta de:</Text></CardItem>
            <CardItem>
            <Button style={misEstilos.boton1}>
              <Icon name="logo-facebook" /><Text>Facebook</Text>
            </Button>
            <Button style={misEstilos.boton2}>
              <Icon name="logo-google" /><Text>Google</Text>
            </Button>
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
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{
    marginLeft: '30%',
    backgroundColor: '#3B5998', 
  },
  boton1 : {
    textAlign:'center',
    margin: '2%',
    backgroundColor: '#3B5998',
    justifyContent: 'center',
  },
  boton2 : {
    textAlign:'center',
    margin: '2%',
    backgroundColor: '#DD5144',
    justifyContent: 'center',
  },
});

export default Registro;
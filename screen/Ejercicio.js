import React, { Component } from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Card,CardItem} from 'native-base';
//Se obtienen datos de un json y se acomodan en una Card y CardItem
//Autor:Martínez Garcia Diana America
class Ejercicio extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }
  async componentDidMount(){
    try{
      const response = await fetch('https://swapi.co/api/planets/?format=json');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return(
      <Card>
      <View>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => 
          <CardItem>
            <Text>Planeta: {item.name}, Diametro: {item.diameter},Clima: {item.climate}, Habitantes:{item.population}</Text>
          </CardItem>
          }
          keyExtractor = {({name},index)=>name} />
      </View>
      </Card>
    );
  }
}
export default Ejercicio;
import React, { Component } from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Principal extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }//end constructor
  //Lo que está en --- async componentDidMount() ---  se ejecuta independientemente de lo que se este haciendo
  // --- await --- Una promesa es una respuesta, hay promesas verdaderas(regresa los datos correctamente) 
  // y falsas
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
  }//end componentDidMount

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }// end if
    return(
      <View>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) => 
            <Text>Planeta: {item.name}, Diametro: {item.diameter}, Clima: {item.climate}, Habitantes:{item.population}</Text>
          }
          keyExtractor = {({name},index)=>name} />
      </View>
    );
  }//end render
}//end class

export default Principal;
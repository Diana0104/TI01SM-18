import React, { Component } from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//En esta pantalla se extren los datos de una api en formato json para que se puedan visualizar en la aplicasión
//Autor:Martínez Garcia Diana America
class Principal extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }//end constructor 
  async componentDidMount(){//Lo que está en --- async componentDidMount() ---  se ejecuta independientemente de lo que se este haciendo
    try{
      const response = await fetch('https://reactnative.dev/movies.json');
      const responseJson = await response.json();// --- await --- Una promesa es una respuesta, hay promesas verdaderas(regresa los datos correctamente)
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
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
            <Text>{item.title}, {item.releaseYear}</Text>
          }
          keyExtractor = {({id},index)=>id} />
      </View>
    );
  }//end render
}//end class

export default Principal;
//Autor:Martínez Garcia Diana America
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Iniciar from './screen/Iniciar';
import Principal from './screen/Principal';
import Ejercicio from './screen/Ejercicio';

const Stack = createStackNavigator();

const App: () => React$Node = ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Registro' component={Registro} />
        <Stack.Screen name='Iniciar' component={Iniciar} />
        <Stack.Screen name='Principal' component={Principal} />
        <Stack.Screen name='Ejercicio' component={Ejercicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
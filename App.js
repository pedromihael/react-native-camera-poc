/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PreCapture} from './src/screens/PreCapture';
import {Camera} from './src/screens/Camera';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreCapture" headerMode="none">
        <Stack.Screen name="PreCapture" component={PreCapture} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

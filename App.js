import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text, Navigation, SafeAreaView, Image, Button, TouchableOpacity, Platform, Dimensions } from 'react-native';
import MyStack from './navigation';
import FlatButton from './shared/Button';
import Splash from './shared/Splash';
//import Login from './shared/Login';
//import SignUp from './shared/SignUp';
import { LogBox } from 'react-native';
import ExploreTabs from './navigation/ExploreTabs';
import React from 'react';


// screens
import Login from './screens/Login';
import SignUp from './screens/SignUp';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
      //<Login/>
      //<Splash/>
      //<SignUp/>
      //<Inputs/>
      //<FlatButton texts='hello'/>
     
      <NavigationContainer>
       <MyStack/>
       
      </NavigationContainer>
      //<Login/>
      
  );
}

const styles = StyleSheet.create({
  container: {

  }
});

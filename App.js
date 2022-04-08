
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text, Navigation, SafeAreaView, Image, Button, TouchableOpacity, Platform, Dimensions } from 'react-native';

import FlatButton from './shared/Button';
import Splash from './shared/Splash';
//import Login from './shared/Login';
//import SignUp from './shared/SignUp';
import { LogBox } from 'react-native';
//import ExploreTabs from './navigator/ExploreTabs';
import React from 'react';
// React navigation stack
import RootStack from './navigator/RootStack';
import ExploreTabs from './navigator/ExploreTabs';


// screens
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Exercise from './screens/Exercise';
import Home from './screens/Home';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();


export default function App() {
  
  return <RootStack/>
}

const styles = StyleSheet.create({
  container: {

  }
});

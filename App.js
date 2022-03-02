import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text, Navigation, SafeAreaView, Image, Button, TouchableOpacity, Platform, Dimensions } from 'react-native';
import FlatButton from './shared/Button';
import HomeScreen from './shared/Home';
import LoginScreen from './shared/Login';
import SignUpPage from './shared/SignUp';



export default function App() {
  
  return (
      //<LoginScreen/>
      <HomeScreen/>
      //<SignUpPage/>
      //<Inputs/>
      //<FlatButton texts='hello'/>
  );
}

const styles = StyleSheet.create({
  Background: {
  }
});

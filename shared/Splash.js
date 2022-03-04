import React from 'react';
import { StyleSheet,View, Text, SafeAreaView, Image, Button, TouchableOpacity, Platform, Dimensions } from 'react-native';
import FlatButton from './Button.js';

const win = Dimensions.get('window');


export default function Splash({navigation}) {
  
    return (
        
        <SafeAreaView style={styles.Background}>
          <View>
            <Text  style={styles.logo}> Cloud Fitness </Text>
            <View>
              <Image style={styles.logoImage} resizeMode="stretch" source={require("../assets/CloudFitnessLogo.png")}/>
            </View>
            <View style = {styles.buttons}>
             <TouchableOpacity  onPress={()=>navigation.navigate('Login')}><FlatButton title = 'Login'  style={styles.buttonSelf} /></TouchableOpacity> 
              <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}><FlatButton   title = 'Sign Up' style={styles.buttonSelf}/></TouchableOpacity> 
              <TouchableOpacity onPress={()=>navigation.navigate('Explore')}><FlatButton   title = 'Explore' style={styles.buttonSelf} /></TouchableOpacity>
              </View>
          </View>
        </SafeAreaView>    
  
        
        
    );
  }

  const styles = StyleSheet.create({
    Background: {
      backgroundColor: `#22abe6`,
      flex: 1,
      alignItems: "center",
      
      paddingTop: Platform.OS === "android"? 20: 0,
    },
    logo: {
      fontWeight: '700',
      top: 65,
      alignSelf: 'center',
      fontSize: 32,
      paddingBottom: 83,
      
    },
    buttons: {
      alignContent: "center",
      justifyContent: 'center',
      alignSelf: 'center',
      //padding: 10,
      width: 40, 
      margin: 39,
    },  
    
    logoImage: {
      width: win.width/1.3,
      height: win.width/1.9,
      resizeMode: "contain",
      alignSelf: "center",
    }
  });
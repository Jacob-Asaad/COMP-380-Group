import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, Dimensions } from 'react-native';
import Inputs from './TextInput';
import FlatButton from '/Users/rodolforivera/practice/shared/Button.js';
import SecureInputs from './SecureTextInput';



const win = Dimensions.get('window');
export default function LoginScreen(){
    return (
        <SafeAreaView style={styles.Backgrounds}>
            <View><Image style={styles.logoImage} source={require("/Users/rodolforivera/practice/assets/CloudFitnessLogo.png")}></Image></View>
            <View><Text style={styles.LoginT}>Login</Text></View>
            <View style={styles.logi}><View style={styles.text}><Text>UserName</Text></View>
            
            <Inputs title='UserName' style = {styles.buttons}/>
            <View style={styles.text2}><Text>Password</Text></View>
            <View><SecureInputs title= 'Password' style = {styles.buttons}/></View>
            </View>
            <View style={styles.submit}><FlatButton title='Submit' /></View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Backgrounds: {
      backgroundColor: `#22abe6`,
      flex: 1,
      alignItems: "center",
      //justifyContent: 'center',
      paddingTop: Platform.OS === "android"? 20: 0,
    },
    LoginT: {
        fontSize: 37,
        fontWeight: '700',
    },
    logi: {
        justifyContent: "center",
        //backgroundColor: 'white',
        
    },
    buttons: {
        //padding: 60,
        
        backgroundColor: 'black',
        justifyContent: 'center',
        
    },
    text: {
        bottom: 0,
        left: 0,
        marginTop: 30,
        
        //backgroundColor: 'white'
    },
    text2: {
        marginTop: 40,
    },
    logoImage: {
        width: win.width/2.2,
        height: win.width/2.0,
        resizeMode: "contain",
        marginBottom: 15,
        marginTop: 24,
        
      },
      submit: {
        paddingTop: 50,
        //backgroundColor: 'white',
      }
});
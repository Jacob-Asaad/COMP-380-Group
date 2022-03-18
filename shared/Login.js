import React from 'react';
import { StyleSheet, Text, TouchableOpacity , View, SafeAreaView, Image, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Inputs from './TextInput';
import FlatButton from './Button';
import SecureInputs from './SecureTextInput';




const win = Dimensions.get('window');
export default function Login({navigation}){
    return (
        <KeyboardAwareScrollView style={styles.foot}>
        <SafeAreaView style={styles.Backgrounds}>
            <View><Image style={styles.logoImage} source={require("../assets/CloudFitnessLogo.png")}></Image></View>
            <View><Text style={styles.LoginT}>Login</Text></View>
            <View style={styles.logi}><View style={styles.text}><Text>UserName:</Text></View>
            
            <Inputs title='UserName' style = {styles.buttons}/>
            <View style={styles.text2}><Text>Password:</Text></View>
            <View><SecureInputs title= 'Password' style = {styles.buttons}/></View>
            </View>
            <TouchableOpacity style={styles.submit}><FlatButton title='Login' /></TouchableOpacity>
        </SafeAreaView>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    Backgrounds: {
      backgroundColor: `#22abe6`, // #22abe6 - original 
      flex: 1,
      alignItems: "center",
      paddingTop: Platform.OS === "android"? 20: 0,
    },
    foot: { 
        backgroundColor: '#22abe6'
    },
    LoginT: {
        fontSize: 37,
        fontWeight: '700',
    },
    text: {
        marginTop: 30,
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
        
      }
});
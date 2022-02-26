import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Dimensions, Image } from 'react-native';
import SecureInputs from './SecureTextInput';
import Inputs from './TextInput';
import FlatButton from '/Users/rodolforivera/practice/shared/Button.js';


const win = Dimensions.get('window');
export default function SignUpPage(){
    return (
        <SafeAreaView style={styles.Backgrounds}>
            <View><Image style={styles.logoImage} source={require("/Users/rodolforivera/practice/assets/CloudFitnessLogo.png")}></Image></View>
            <View><Text style={styles.header}>Register</Text></View>
            <Inputs  title = 'Email'/>
            <View><Text> </Text></View>
            <Inputs  title = 'UserName'/>
            <View><Text> </Text></View>
            <SecureInputs  title = 'Password'/>
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
    logoImage: {
        width: win.width/2.2,
        height: win.width/2.0,
        resizeMode: "contain",
        marginBottom: 15,
        marginTop: 24,
        
      },
      header: {
        fontSize: 37,
        fontWeight: '700',
        marginBottom: 30,
      },
      submit: {
        paddingTop: 25,
      },
});
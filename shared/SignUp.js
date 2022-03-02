import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Dimensions, Image } from 'react-native';
import SecureInputs from './SecureTextInput';
import Inputs from './TextInput';
import FlatButton from './Button';


const win = Dimensions.get('window');
export default function SignUpPage(){
    return (
        <SafeAreaView style={styles.Backgrounds}>
            <View><Image style={styles.logoImage} source={require("/Users/rodolforivera/COMP-380-Group/assets/CloudFitnessLogo.png")}></Image></View>
            <View><View><Text style={styles.header}>Register</Text></View>
            <Text>Password:</Text>
            <Inputs  title = 'Email'/>
            <Text style={styles.text}>UserName: </Text>
            <Inputs  title = 'UserName'/>
            <Text style={styles.text}>Password:</Text>
            <SecureInputs  title = 'Password'/>
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
        alignSelf: 'center',
      },
      submit: {
        paddingTop: 25,
      },
      labels:  {
        backgroundColor: 'white',
        flexDirection: 'row',
        
      },
      logi: {
        justifyContent: "center",
    },
    text: {
      bottom: 0,
      left: 0,
      marginTop: 20,
  },
});
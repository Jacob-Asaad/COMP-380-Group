import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, navigation, Touchable } from 'react-native';



export default function SecureInputs({title}) {
  
    return (
        <TouchableOpacity> 
            <View style={styles.container} >
                <TextInput placeholder={title} secureTextEntry={true} style={styles.Button}></TextInput>
            </View> 
            </TouchableOpacity>
       
    );
  }

  const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
      },
    Button: {
      borderWidth: 1.5,
      backgroundColor: `white`,
      alignSelf: 'center',
      width: 190,
      height: 55,
      alignContent: 'center',
      borderColor: 'black',
      margin: 5,
      padding: 5,
    
    },
    ButtonText: {
        textAlign: "center",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 16,
        
    },
    no:{
        backgroundColor: 'black',
        width: 40,
        top: 60,
    }
  });
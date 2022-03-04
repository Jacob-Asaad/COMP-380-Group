import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function FlatButton({title}) {
  
    return (
        
            <View style={styles.Button}>
                <Text style={styles.ButtonText}>{ title }</Text>
            </View>
            
       
    );
  }

  const styles = StyleSheet.create({
    Button: {
      borderWidth: 1.5,
      backgroundColor: `white`,
      padding: 20,
      margin: 20,
      alignSelf: 'center',
      width: 210,
      alignContent: 'center',
      borderColor: 'black',
    
    },
    ButtonText: {
        textAlign: "center",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 16,
        
    }
  });

  
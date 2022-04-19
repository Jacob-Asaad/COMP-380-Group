import React from 'react';
import { StyleSheet,View, Text, SafeAreaView, Image, Button, TouchableOpacity, Platform, Dimensions } from 'react-native';
import FlatButton from './Button.js';
import { StyledButtonG, StyledButtonS, StyledButtonS1, StyledButtonS2, ButtonText, StyledContainer, InnerContainer, StyledFormArea, Line } from '../components/styles.js';

const win = Dimensions.get('window');


export default function Splash({navigation}) {
  
    return (
        
        <StyledContainer>
          <InnerContainer>
           
            <View>
              <Image style={styles.logoImage} resizeMode="stretch" source={require("../assets/CloudFitnessLogo.png")}/>
            </View>
             <StyledFormArea>
             <StyledButtonS  onPress={()=>navigation.navigate('Login')}><ButtonText>Login</ButtonText></StyledButtonS> 
              <StyledButtonS1 onPress={()=>navigation.navigate('SignUp')}><ButtonText>SignUp</ButtonText></StyledButtonS1>
              <Line /> 
              <StyledButtonS2 onPress={()=>navigation.navigate('PublicSiteWorkouts')}><ButtonText>Explore</ButtonText></StyledButtonS2> 
              </StyledFormArea>
              
          </InnerContainer>
        </StyledContainer>    
  
        
        
    );
  }

  const styles = StyleSheet.create({
    Background: {
      backgroundColor: `#0066ee`,
      flex: 1,
      alignItems: "center",
      
      paddingTop: Platform.OS === "android"? 20: 0,
    },
    logo: {
      fontWeight: '700',
      top: 65,
      alignSelf: 'center',
      fontSize: 32,
      paddingBottom: 15,
      
    },
    buttons: {
      alignContent: "center",
      justifyContent: 'center',
      alignSelf: 'center',
      //padding: 10,
      width: 40, 
      //margin: 39,
    },  
    
    logoImage: {
      width: win.width/1.2,
      height: win.width/1.2,
      resizeMode: "cover",
      alignSelf: "center",
    }
  });
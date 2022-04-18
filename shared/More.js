import { StatusBar } from "expo-status-bar";
import react from "react";
import SecureInputs from './SecureTextInput';

import { StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import {
    StyledContainer,
    InnerContainer,
    MiniTitle,
    StyledInputLabel,
    MoreBox,
    MoreText,
    ButtonText,
    StyledButton,
} from './../components/styles';



export default function More({navigation}) {
  
    return (
        <StyledContainer>
            <InnerContainer>
                
               
            <MiniTitle>Settings</MiniTitle>
            <StyledInputLabel style={styles.texts}>First Name</StyledInputLabel>
            <MoreBox>
                <MoreText>First Name</MoreText>
            </MoreBox>
            <StyledInputLabel style={styles.texts}>Last Name</StyledInputLabel>
            <MoreBox>
                <MoreText>Second Name</MoreText>
            </MoreBox>
            <StyledInputLabel style={styles.texts}>Email</StyledInputLabel>
            <MoreBox>
                <MoreText>Email</MoreText>
            </MoreBox>
           
            <StyledInputLabel style={styles.texts}>Change Password</StyledInputLabel>
                <MoreText style={styles.changePass}>New Password</MoreText>
                <SecureInputs 
                title="* * * * * * * *"
                />
                <MoreText>Retype Password</MoreText>
                <SecureInputs 
                title="* * * * * * * *"
                />
                <StyledButton>
                <ButtonText >Submit</ButtonText>
            </StyledButton>

                
            
               
            </InnerContainer>
        </StyledContainer>
        
        
    );
}

const styles = StyleSheet.create({
    texts: {
        alignSelf: "flex-start",
    },
    changePass: {
        marginTop: 15,
    }
});
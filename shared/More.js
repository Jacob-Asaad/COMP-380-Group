import { StatusBar } from "expo-status-bar";
import react from "react";
import SecureInputs from './SecureTextInput';

import { StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import {
    StyledContainer,
    InnerContainer,
    StyledTextInput,
    MiniTitle,
    MoreBox,
    MoreText,
    MoreTextInput,
    ButtonText,
    StyledInputLabel,
    StyledButton,
} from './../components/styles';



export default function More({navigation}) {
  
    return (
        <StyledContainer>
            <InnerContainer>
                <StatusBar backgroundColor="blue"/>
               
            <MiniTitle>Settings</MiniTitle>
            <MoreBox>
                <MoreText>First Name</MoreText>
            </MoreBox>
            <MoreBox>
                <MoreText>Second Name</MoreText>
            </MoreBox>
            <MoreBox>
                <MoreText>Email</MoreText>
            </MoreBox>
           
                
                <MoreText>New Password</MoreText>
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




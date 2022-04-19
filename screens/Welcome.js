import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useRoute } from '@react-navigation/native';

import {Formik} from 'formik';


import {
    InnerContainer,
    PageTitle1,
    SubTitle,
    StyledFormArea,
    StyledButton1,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';

import Header from './Header';


const Welcome = ({ navigation, firstName, lastName, email }) => {
    const route = useRoute();
    //console.log(route.params.lastName);
    
    const [hidePassword, setHidePassword] = useState(true);
    return(
        <>
           <StatusBar style="light" />
            <InnerContainer>
                
                <WelcomeImage resizeMode="cover" source={require('./../assets/CloudFitnessLogo.png')}/>
                <WelcomeContainer>
                <PageTitle1 color={"#000f"} welcome={true}>Welcome! Buddy</PageTitle1>
                <SubTitle welcome={true}>{route.params.firstName + ' ' + route.params.lastName|| 'Joe Weinstock'}</SubTitle>
                <SubTitle welcome={true}>{route.params.email || 'joeweinstock@widgetfactory.com'}</SubTitle>
                <StyledFormArea>
                <Avatar resizeMode="cover" source={require('./../assets/CloudFitnessLogo.png')} />
                <Line />
                
                    <StyledButton1 onPress={() => navigation.navigate("Splash")}>
                        <ButtonText>
                            Logout
                        </ButtonText>
                    </StyledButton1>
                    
                    
                    
                    
                    
                </StyledFormArea>
                
                </WelcomeContainer>
            </InnerContainer>
            
            
        </>
    );
};



export default Welcome;
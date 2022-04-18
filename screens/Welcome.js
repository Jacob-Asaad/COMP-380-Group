import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useRoute } from '@react-navigation/native';

import {Formik} from 'formik';


import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
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
                <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
                <SubTitle welcome={true}>{route.params.firstName + ' ' + route.params.lastName|| 'Joe Weinstock'}</SubTitle>
                <SubTitle welcome={true}>{route.params.email || 'joeweinstock@widgetfactory.com'}</SubTitle>
                <StyledFormArea>
                <Avatar resizeMode="cover" source={require('./../assets/CloudFitnessLogo.png')} />
                <Line />
                
                    <StyledButton onPress={() => navigation.navigate("Login")}>
                        <ButtonText>
                            Logout
                        </ButtonText>
                    </StyledButton>
                    
                    
                    
                    
                    
                </StyledFormArea>
                
                </WelcomeContainer>
            </InnerContainer>
            <Header 
                firstName={firstName}
                lastName={lastName}
                email={email}
            />
        </>
    );
};



export default Welcome;
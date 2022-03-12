import React , {useState} from 'react';
import { StatusBar } from 'expo-status-bar';


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




const Welcome = ({navigation}) => {
    
    const [hidePassword, setHidePassword] = useState(true);
    return(
        <>
           <StatusBar style="light" />
            <InnerContainer>
                
                <WelcomeImage resizeMode="cover" source={require('./../assets/CloudFitnessLogo.png')}/>
                <WelcomeContainer>
                <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
                <SubTitle welcome={true}>Joe Weinstock</SubTitle>
                <SubTitle welcome={true}>joeweinstock@widgetfactory.com</SubTitle>
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
        </>
    );
};



export default Welcome;
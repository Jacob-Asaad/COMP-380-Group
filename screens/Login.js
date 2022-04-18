import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// API client
import axios from 'axios';
import Welcome from './Welcome';
import ExploreTabs from '../navigator/ExploreTabs';

// importing Formik from the package that we installed
import { Formik } from 'formik';

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';



import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ButtonText1,
    StyledButton1,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    TextLinkContent1
} from './../components/styles';
import { View, ActivityIndicator } from 'react-native';

const { brand, darkLight, primary } = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://fitnessapp3773.herokuapp.com/user/signin';
        
                              // inside then is a promise
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;

            // this might not work with replit setup might have to set up endpoints
            // in ttpc specific environment
            const {message, status, data} = result;

            if (status != 'SUCCESS') {
                //console.log(response.status);
                handleMessage(message, status);
                
            } else {
                navigation.navigate("ExploreTabs", { ...data[0] });
            }
            setSubmitting(false);
        })
        .catch((error) => {
            //console.log(error.JSON());
            setSubmitting(false);
            handleMessage("An error occured. Check your network and try again");
        });
    };
    // this function will take in the message and the type
    
                // set default value "FAILED"
    const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setMessageType(type);
     };

    return(
        
        <KeyboardAvoidingWrapper>
        <StyledContainer>
           <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/CloudFitnessLogo.png')} />
                {/* <PageTitle>Cloud Fitness</PageTitle> */}
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        if (values.email == '' || values.password == '') {
                            handleMessage('Please fill all the fields');
                            setSubmitting(false);
                        } else {
                            handleLogin(values, setSubmitting);
                        }
                        //navigation.navigate("Welcome");
                    }}
                //  fieldCHanges, fldLosesFocus, fldsbmt,  inptvalues
                >{({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (<StyledFormArea>
                    <MyTextInput 
                        label="Email Address"
                        icon="mail"
                        placeholder="screenslogin@app.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        values={values.email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                        autoCompleteType="email"
                        autoCorrect = {false}
                    />

                       <MyTextInput 
                        label="Password"
                        icon="lock"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        values={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                    <ExtraView>
                        {/* <ExtraText>Forgot your password? </ExtraText> */}
                        <TextLink>
                            <TextLinkContent1>Forgot your password?</TextLinkContent1>
                        </TextLink>
                    </ExtraView>
                    <MsgBox type={messageType}>{message}</MsgBox>
                    {!isSubmitting && (<StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledButton>)}

                    {isSubmitting && (<StyledButton disabled={true}>
                        <ActivityIndicator size="large" color={Colors.secondary} />
                    </StyledButton>)}
                    <Line />
                    
                    
                    <ExtraView>
                        <ExtraText>Don't have an account? </ExtraText>
                        <TextLink onPress={() => navigation.navigate("SignUp")}>
                            <TextLinkContent>Sign up</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                    
                </StyledFormArea>)}

                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
        
        
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
        <LeftIcon>
          <Octicons name={icon} size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props} />
        {isPassword && (
            <RightIcon onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'}size={30} color={darkLight}/>
            </RightIcon>
        )}
    </View>
    );
};

export default Login;
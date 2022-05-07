import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// importing Formik from the package that we installed
import {Formik} from 'formik';

// icons
import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';



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
    StyledButton11,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';
import { View, ActivityIndicator } from 'react-native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
//import { TouchableOpacity } from 'react-native-gesture-handler';

import axios from 'axios';
const {brand, darkLight, primary} = Colors;

const SignUp = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();



    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        //const url = 'https://fitnessapp3773.herokuapp.com/user/signup';
        const url = 'https://aqueous-mountain-56734.herokuapp.com/user/signup';
        
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
                navigation.navigate("Login", { ...data });
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
        
        <StyledContainer>
           <StatusBar style="dark" />
            <InnerContainer>
              
                <PageTitle>Cloud Fitness</PageTitle>
                <SubTitle>Sign Up</SubTitle>
                <KeyboardAvoidingWrapper>
                <Formik
                    initialValues={{firstName: '', lastName: '', email: '', password: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        if (values.firstName == '' || values.lastName == '' || values.email == '' || values.password == '') {
                            handleMessage('Please fill all the fields');
                            setSubmitting(false);
                        } else if (values.password !== values.confirmPassword) {
                            handleMessage('Passwords do not match');
                            setSubmitting(false);
                        } else {
                            handleSignup(values, setSubmitting);
                        }
                    }}
                //  fieldCHanges, fldLosesFocus, fldsbmt,  inptvalues
                >{({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (<StyledFormArea>
                    <MyTextInput 
                        label="First Name"
                        icon="person"
                        placeholder="First Name"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        values={values.firstName}
                       
                    />

                    <MyTextInput 
                        label="Last Name"
                        icon="file"
                        placeholder="Last Name"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        values={values.lastName}
                        
                    />

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
                    <MyTextInput 
                        label="Confirm Password"
                        icon="lock"
                        placeholder="* * * * * * * *"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        values={values.confirmPassword}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}

                    />
                    <MsgBox type={messageType}>{message}</MsgBox>
                    

                    {!isSubmitting && (<StyledButton11 onPress={handleSubmit}>
                        <ButtonText>
                            Create Account
                        </ButtonText>
                    </StyledButton11>)}

                    {isSubmitting && (<StyledButton11 disabled={true}>
                        <ActivityIndicator size="large" color={primary} />
                    </StyledButton11>)}

                    <Line />
                    
                    
                    <ExtraView>
                        <ExtraText>Already have an account? </ExtraText>
                        <TextLink onPress={() => navigation.navigate("Login")}> 
                            <TextLinkContent>Login</TextLinkContent> 
                         </TextLink> 
                       
                    </ExtraView>
                </StyledFormArea>)}

                </Formik>
                </KeyboardAvoidingWrapper>
            </InnerContainer>
        </StyledContainer>
        
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

export default SignUp;
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
    StyledButton1,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    TextLinkContent1
} from './../components/styles';
import {View} from 'react-native';

const {brand, darkLight, primary} = Colors;

// keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
           <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/CloudFitnessLogo.png')} />
                <PageTitle>Cloud Fitness</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                //  fieldCHanges, fldLosesFocus, fldsbmt,  inptvalues
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                    <MyTextInput 
                        label="Email Address"
                        icon="mail"
                        placeholder="screenslogin@app.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        values={values.email}
                        keyboardType="email-address"
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
                        <ExtraText>Forgot your password? </ExtraText>
                        <TextLink>
                            <TextLinkContent1>Click here</TextLinkContent1>
                        </TextLink>
                    </ExtraView>
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledButton>
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
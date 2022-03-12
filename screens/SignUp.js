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
    TextLinkContent
} from './../components/styles';
import {View} from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';

const {brand, darkLight, primary} = Colors;

const SignUp = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
           <StatusBar style="dark" />
            <InnerContainer>
              
                <PageTitle>Cloud Fitness</PageTitle>
                <SubTitle>Account SignUp</SubTitle>
                <Formik
                    initialValues={{firstName: '', lastName: '', email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Login");
                    }}
                //  fieldCHanges, fldLosesFocus, fldsbmt,  inptvalues
                >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
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
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>
                            Create Account
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    
                    
                    <ExtraView>
                        <ExtraText>Already have an account? </ExtraText>
                        {/* <TextLink> */}
                            {/* <TextLinkContent>Login</TextLinkContent> */}
                        {/* </TextLink> */}
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={{color: 'yellow', fontSize: 15, marginLeft: 2}}>Login</Text></TouchableOpacity>
                    </ExtraView>
                </StyledFormArea>)}

                </Formik>
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
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

// API client
import axios from 'axios';
import Welcome from './Welcome';

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

const Exercise = ({ navigation, route }) => {
    //const { email, id } = route.params;

    const loadExercises = function (credentials, setSubmitting) {
        //handleMessage(null);
        const [message, setMessage] = useState();
        const [messageType, setMessageType] = useState();

        const url = 'https://fitnessapp3773.herokuapp.com/user/exercise/777';

        axios
        .get(url)
        .then(function (response) {
            const result = response.data;

            const {message, status, data} = result;

            if (result.status != 200) {
                //handleMessage(result.message, result.status);
            } else {
                console.log(result.data);
            }
            setSubmitting(false)
        })
        .catch((error) => {
            //console.log(error.JSON());
            setSubmitting(false);
           // handleMessage("An error occured. Check your network and try again");
        });
        
       /* const handleMessage = (message, type = 'FAILED') => {
            setMessage(message);
            setMessageType(type);
         }; */
    }

    return(
        <StyledContainer><InnerContainer>
        <Formik>
        <StyledButton
        onPress={loadExercises}
      ><ButtonText>Test Load</ButtonText></StyledButton>
      </Formik>
      </InnerContainer></StyledContainer>
        
    )
}

export default Exercise;
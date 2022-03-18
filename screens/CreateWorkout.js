import react from "react";
import { StyleSheet, Platform, Text, View, SafeAreaView, ScrollView } from 'react-native';

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
    TextLinkContent1,
    BottomTab,
} from './../components/styles';
const CreateWorkout = ({navigation}) => {
  
    return (
            <StyledContainer>
            <BottomTab><Text>Explore</Text></BottomTab>
            <BottomTab><Text>Profile</Text></BottomTab>
            </StyledContainer>
       
        
    )
}

export default CreateWorkout;
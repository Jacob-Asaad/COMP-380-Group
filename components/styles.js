import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
export const Colors = {
    primary: "#0066ee", // #00bfff - original - blue background 0066ee
    secondary: "#E5E7EB", //E5E7EB white
    loginColor: "#5abdf6",
    tertiary: "#1F2937", 
    darkLight: "#9CA3AF",
    brand: "#0000ff",
    green: "#7fff00",
    red: "#FF0000",
};

const { primary, secondary, tertiary, darkLight, brand, green, red, loginColor } = Colors;

export const StyledContainer = styled.View`
     flex: 1;
     padding: 15px;
     padding-top: ${StatusBarHeight + 30}px;
     background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
     width: 310px;
     height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
      font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    padding: 1px;

    ${(props) => props.welcome && `
      margin-bottom: 5px;
      font-weight: normal;
    `}

`;

export const StyledFormArea = styled.View`
    width: 90%;
`;
// remember we are getting this from (styled-components).(react-native)
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${loginColor};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    
`;

export const StyledButton1 = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${red};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    
`;

export const ButtonText = styled.Text`
    color: ${secondary};
    font-size: 16px;

    
`;

export const ButtonText1 = styled.Text`
    color: ${green};
    font-size: 16px;

    
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${props => props.type == 'SUCCESS' ? green: red};
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;  
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

`;

export const TextLinkContent = styled.Text`
    color: ${green};
    font-size: 15px;
`;

export const TextLinkContent1 = styled.Text`
    color: ${red};
    font-size: 15px;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const BottomTab = styled.TouchableOpacity`
padding: 1px;
background-color: ${green};
justify-content: center;
align-items: center;
border-radius: 5px;
margin-vertical: 5px;
margin-horizontal: 15px;
height: 8%;
width: 15%;
marginTop: 175%;

flex-direction: row;

`;
import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import NumericInput from 'react-native-numeric-input';

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
    orange: `#ff8c00`,
    crim: `#dc143c`,
    drkcyan: `#008b8b`,
    grn: "#1e90ff",
    c1prim: "#00ced1",
    tempVar: null, 
};

const { primary, crim, grn, c1prim, drkcyan, secondary, tertiary, darkLight, brand, green, red, loginColor,tempVar } = Colors;

export const StyledNumericInputView =styled.View`
     padding-left: 32%;
`
export const StyledNumericInputView1 =styled.View`
     margin-left: 5px;
     flex-direction: row;
    justify-content: space-around;
     padding: 5px;
     padding-left: 5px;
`
export const StyledNumericInputView11 =styled.View`
     margin-left: 5px;
     flex-direction: row;
    justify-content: space-around;
     padding: 5px;
     padding-left: 30px;
`

export const StyledContainer = styled.View`
     flex: 1;
     padding: 25px;
     padding-top: ${StatusBarHeight + 10}px;
     background-color: ${primary};
`;

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
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: ${primary};
    padding: 10px;

    ${(props) => props.welcome && `
      font-size: 35px;
    `}
`;

export const PageTitle1 = styled.Text`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: ${drkcyan};
    padding: 10px;

    ${(props) => props.welcome && `
      font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 25px;
    margin-top: 15px;
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
    width: 99%;
`;
// remember we are getting this from (styled-components).(react-native)
export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 75px;
    padding-right: 75px;
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
export const StyledInputNumericLabel = styled.Text`
    marginTop: 5px;
    color: ${tertiary};
    font-size: 13px;
    text-align: center;
    padding-right: 100px;
`;

export const StyledInputNumericLabel1 = styled.Text`
    marginTop: 5px;
    color: ${tertiary};
    font-size: 13px;
    text-align: center;
    flex-direction: row;
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

export const StyledButton11 = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${drkcyan};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    
`;

export const StyledButtonS = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${loginColor};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-horizontal: 17px;
    margin-vertical: 17px;
    height: 60px;
    
`;

export const StyledButtonS1 = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${crim};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 17px;
    margin-horizontal: 17px;
    height: 60px;
    
`;


export const StyledButtonS2 = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${drkcyan};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-horizontal: 17px;
    margin-vertical: 17px;
    height: 60px;
    
`;


export const StyledButtonG = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${Colors.orange};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 25px;
    height: 60px;
    
`;

export const StyledButton1 = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${crim};
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

export const ButtonText2 = styled.Text`
    color: ${drkcyan};
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
    color: ${secondary};
    font-size: 15px;
`;

export const TextLinkContent1 = styled.Text`
    color: ${secondary};
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
    border-color: ${tertiary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 35%;
    max-width: 100%;
    

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


// Colors
export const colors1 = {
  primary: "#00ced1",
  secondary: "#1e90ff",
  tertiary: "#E6E6E6",
  alternative: "#000000",
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${colors1.primary};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${colors1.tertiary};
  letter-spacing: 2px;
  font-style: italic;
`;
export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors1.tertiary};
`;

// List
export const ListContainer = styled.View`
  margin-bottom: 30px;
  flex: 1;
  padding-bottom: 40px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${colors1.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListView1 = styled.TouchableHighlight`
  background-color: ${colors1.primary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors1.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors1.tertiary};
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors1.alternative};
  text-align: right;
  text-transform: uppercase;
`;

export const TypeText = styled.Text`
  font-size: 12px;
  letter-spacing: 1px;
  color: ${colors1.alternative};
  text-align: left;
  
`;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${colors1.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${colors1.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors1.primary};
`;

export const ModalView = styled.View`
  background-color: ${colors1.secondary};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors1.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors1.secondary};
  letter-spacing: 1px;
  marginBottom: 5px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const MiniTitle = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  
`;

export const MoreBox = styled.View`
  flex-direction: row;
  align-self: stretch;
  margin: 10px;
  padding: 15px;

  border-width: 2px;
  background-color: ${colors1.secondary};
`;

export const MoreText = styled.Text`
 font-size: 16px;
  align-self: flex-start;
`;
export const MoreTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 6px;
    align-self: stretch;
    
    color: ${tertiary};
`;
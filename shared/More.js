import { StatusBar } from "expo-status-bar";
import react, {useState} from "react";
import SecureInputs from './SecureTextInput';
import {Formik} from 'formik';
import { StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import {
    StyledContainer,
    InnerContainer,
    MiniTitle,
    StyledInputLabel,
    MoreBox,
    MoreText,
    ButtonText,
    StyledButton,
} from './../components/styles';



const More = ({firstName, LastName, email }) => {
    const route = useRoute();
    const [hideNew, setNew] = useState(false);

   
    return (
        <StyledContainer>
            <InnerContainer>
                
               
            <MiniTitle>Settings</MiniTitle>
            <StyledInputLabel style={styles.texts}>First Name</StyledInputLabel>
            <MoreBox>
                <MoreText>{route.params.firstName}</MoreText>
            </MoreBox>
            <StyledInputLabel style={styles.texts}>Second Name</StyledInputLabel>
            <MoreBox>
                <MoreText>{route.params.lastName}</MoreText>
            </MoreBox>
            <StyledInputLabel style={styles.texts}>Email</StyledInputLabel>
            <MoreBox>
                <MoreText  style={styles.rend}>{route.params.email}</MoreText>
            </MoreBox>
           <StyledInputLabel style={styles.texts}>Change Password</StyledInputLabel>
            
            {
                hideNew ? (
                    <View>
                
                <Text> </Text>
                <SecureInputs 
                title="New Password"
                />
                <Text> </Text>
                <SecureInputs title="Retype Password"/>
                <Text> </Text>
                <StyledButton onPress={()=> setNew(!hideNew)}><ButtonText>Submit</ButtonText></StyledButton>
                </View>
            ) : (
                <View>
                <Text></Text>
                <SecureInputs 
                title="Current Password"
                />
                <StyledButton onPress={()=> setNew(!hideNew)}><ButtonText>Submit</ButtonText></StyledButton>
                </View>
            )
            }
                
            
               
            </InnerContainer>
        </StyledContainer>
        
        
    );
}

const styles = StyleSheet.create({
    texts: {
        alignSelf: "flex-start",
    },
    changePass: {
        marginTop: 15,
    },
    rend: {
        
    },
});
export default More;
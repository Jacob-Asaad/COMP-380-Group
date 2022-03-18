import React from 'react';

// keyboard avoiding view
import {KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keybooard} from 'react-native'; 
import { Keyboard } from 'react-native-web';

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#00bfff'}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}

                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;
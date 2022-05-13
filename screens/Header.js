import React from 'react';

import { NavigationContainer, useRoute } from '@react-navigation/native';

import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors1, 
} from './../components/styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({navigation, firstName}) => {
    const route = useRoute();
    return (
       <HeaderView>
           <HeaderTitle>{route.params.firstName}'s Workouts</HeaderTitle>
           
       </HeaderView>
    );
}

export default Header;
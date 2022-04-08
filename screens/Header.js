import React from 'react';

import {
    HeaderView,
    HeaderTitle,
    HeaderButton,
    colors1,
} from './../components/styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({}) => {
    return (
       <HeaderView>
           <HeaderTitle>Workouts</HeaderTitle>
           <HeaderButton
               
           >
               <MaterialCommunityIcons name="weight-lifter" size={24}  />
           </HeaderButton>
       </HeaderView>
    );
}

export default Header;
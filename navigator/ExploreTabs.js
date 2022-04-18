import React , {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import More from './../shared/More';
//import Explore from '../shared/ExploreDemo';
import Profile from './../shared/Profile';
import Welcome from './../screens/Welcome';
import CreateWorkout from './../screens/CreateWorkout';
import Home from './../screens/Home';
import SiteWorkouts from './../screens/Explore';

import ExerciseHome from '../screens/ExerciseHome';
import {
    Colors, 
} from '../components/styles';

const Tab = createBottomTabNavigator();
const { primary, secondary, green, red, tertiary } = Colors;

const ExploreTabs = ({navigation}) => {

    const route = useRoute();
    //console.log(route.params.lastName);
    //const {firstName, lastName, email} = route.params;
    return(
        
        <Tab.Navigator 
 
        >
            <Tab.Screen name = 'Explore' component={SiteWorkouts} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "compass" size={24} color={focused ? primary : green }/>
                ),
            }}/>
            <Tab.Screen name = 'Create Workout' component={Home} initialParams={{lastName: route.params.lastName, firstName: route.params.firstName, email: route.params.email}} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "weight-lifter" size={24} color={focused ? primary : green}/>
                ),
            }}/>
            <Tab.Screen name = 'Profile' component={Welcome} initialParams={{lastName: route.params.lastName, firstName: route.params.firstName, email: route.params.email}} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "account" size={24} color={focused ? primary : green}/>
                ),
            }}/>
            <Tab.Screen name = 'More' component={More} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "dots-horizontal" size={24} color={focused ? primary : tertiary}/>
                ),
            }}/>
        </Tab.Navigator>
        
        
    );
}

export default ExploreTabs;
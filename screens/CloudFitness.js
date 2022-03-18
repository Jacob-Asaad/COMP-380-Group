import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Platform, Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreTabs from "../navigator/ExploreTabs";
//import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialIcons, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Colors } from "../components/styles";

const CloudFitness = ({navigation}) => {
  
    return (
        <Text>Hello</Text>
    );
};
export default CloudFitness;
/*
const getTabBarIcon = icon => ({ tintColor }) => (
    <AntDesign name={icon} size={24} style={{ color: tintColor }}/>
);


const ExploreScreens = createStackNavigator(
    {
        Explore,
        Profile,
    },
    {
        initialRouteName: 'Explore',
        navigationOptions: {
            tabBarIcon: getTabBarIcon('appstore-o'),
        },
    },
);

const getCommunityBarIcon = icon => ({ tintColor }) => (
    <MaterialCommunityIcons name={icon} size={24} style={{ color: tintColor }}/>
);

const WorkoutScreens = createStackNavigator(
    {
        Workouts,
        Profile,
    },
    {
        initialRouteName: 'Workouts',
        navigationOptions: {
            tabBarIcon: getCommunityBarIcon('weight-lifter'),
        },
    },
);

const getUserBarIcon = icon => ({ tintColor }) => (
    <Ionicons name={icon} size={24} style={{ color: tintColor }}/>
);

const UserScreens = createStackNavigator(
    {
        User,
    },
    {
        initialRouteName: 'User',
        navigationOptions: {
            tabBarIcon: getUserBarIcon('person'),
        },
    },
);
const TabNavigator = createBottomTabNavigator(
    {
        Explore: ExploreScreens,
        Workouts: WorkoutScreens,
        User: UserScreens,
    },
    {
        initialRouteName: 'Explore',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: Colors.green,
            },
            showLabel: false,
            showIcon: true,
            activeTintColor: Colors.primary,
            inactiveTintColor: Colors.tertiary,
        },
    },
);

export default createAppContainer(TabNavigator);

 */
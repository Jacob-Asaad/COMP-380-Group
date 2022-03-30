import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import More from '../shared/More';
import Explore from '../shared/Explore';
import Profile from '../shared/Profile';
import CreateWorkout from '../screens/CreateWorkout';
import {
    Colors, 
} from '../components/styles';

const Tab = createBottomTabNavigator();
const { primary, secondary } = Colors;
const ExploreTabs = () => {
    return(
        <Tab.Navigator 
 
        >
            <Tab.Screen name = 'Explore' component={Explore} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "compass" size={24} color={focused ? primary : secondary }/>
                ),
            }}/>
            <Tab.Screen name = 'Create Workout' component={CreateWorkout} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "weight-lifter" size={24} color={focused ? primary : secondary}/>
                ),
            }}/>
            <Tab.Screen name = 'Profile' component={Profile} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "account" size={24} color={focused ? primary : secondary}/>
                ),
            }}/>
            <Tab.Screen name = 'More' component={More} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "dots-horizontal" size={24} color={focused ? primary : secondary}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

export default ExploreTabs;
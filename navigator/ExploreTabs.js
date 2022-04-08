import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import More from './../shared/More';
import Explore from './../shared/Explore';
import Profile from './../shared/Profile';
import Welcome from './../screens/Welcome';
import CreateWorkout from './../screens/CreateWorkout';
import Home from './../screens/Home';
import {
    Colors, 
} from '../components/styles';

const Tab = createBottomTabNavigator();
const { primary, secondary } = Colors;
const ExploreTabs = ({ navigation, route }) => {
    const {firstName, lastName, email} = route.params;
    return(
        
        <Tab.Navigator 
 
        >
            <Tab.Screen name = 'Explore' component={Explore} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "compass" size={24} color={focused ? primary : secondary }/>
                ),
            }}/>
            <Tab.Screen name = 'Create Workout' component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <MaterialCommunityIcons name = "weight-lifter" size={24} color={focused ? primary : secondary}/>
                ),
            }}/>
            <Tab.Screen render={firstName} name = 'Profile' component={Welcome} options={{
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
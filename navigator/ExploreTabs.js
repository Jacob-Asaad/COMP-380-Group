import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import More from '../shared/More';
import Explore from '../shared/Explore';
import Profile from '../shared/Profile';

const Tab = createBottomTabNavigator();

const ExploreTabs = () => {
    return(
        <Tab.Navigator  >
            <Tab.Screen name = 'Explore' component={Explore}></Tab.Screen>
            <Tab.Screen name = 'CreateWorkout' component={CreateWorkout}></Tab.Screen>
            <Tab.Screen name = 'Profile' component={Profile}></Tab.Screen>
            <Tab.Screen name = 'More' component={More}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default ExploreTabs;
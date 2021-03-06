import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;
import Splash from '../shared/Splash';
//import Login from '../shared/Login';
import Login from './../screens/Login';
//import SignUp from '../shared/SignUp';
import SignUp from  './../screens/SignUp';

import Welcome from './../screens/Welcome';

import ExploreTabs from './ExploreTabs';
import CloudFitness from '../screens/CloudFitness';
import CreateWorkout from './../screens/CreateWorkout';
import Exercise from './../screens/Exercise';
import PublicSiteWorkouts from './../shared/ExploreDemo';
import InputModal from './../screens/inputModal';

const Stack = createNativeStackNavigator();

function MyStack({}) {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
                  headerStyle: {
                      backgroundColor: 'transparent'
                  },
                  headerTintColor: tertiary,
                  headerTransparent: true,
                  headerTitle: '',
                  headerLeftContainerStyle: {
                      paddingLeft: 20
                  }
              }}
              initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} /> 
      <Stack.Screen options={{headerBackVisible: false,}} name="Welcome" component={Welcome} />
      <Stack.Screen options={{headerBackVisible: false,}} name="ExploreTabs" component={ExploreTabs} />
      <Stack.Screen options={{headerBackVisible: false,}} name="CreateWorkout" component={CreateWorkout} />
      <Stack.Screen options={{headerBackVisible: false,}} name="Exercise" component={Exercise} />
      <Stack.Screen options={{headerBackVisible: false,}} name="inputModal" component={InputModal} />
      <Stack.Screen name="PublicSiteWorkouts" component={PublicSiteWorkouts} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MyStack;
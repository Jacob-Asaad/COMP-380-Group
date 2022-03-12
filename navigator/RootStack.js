import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateWorkout from '../screens/CreateWorkout';
import {Colors} from './../components/styles';
const {primary, tertiary} = Colors;
import Splash from '../shared/Splash';
//import Login from '../shared/Login';
import Login from './../screens/Login';
//import SignUp from '../shared/SignUp';
import SignUp from  './../screens/SignUp';
import App from '../App';
import Welcome from './../screens/Welcome';

import ExploreTabs from './ExploreTabs';
import CloudFitness from './../screens/CoudFitness';


const Stack = createNativeStackNavigator();

function MyStack() {
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
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="CloudFitness" component={CloudFitness} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default MyStack;
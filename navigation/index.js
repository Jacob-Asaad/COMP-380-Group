import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../shared/Splash';
import Login from '../shared/Login';
import SignUp from '../shared/SignUp';
import App from '../App';
import CloudFitness from '../shared/CoudFitness';
import ExploreTabs from './ExploreTabs';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerStyle: {backgroundColor: '#22abe6'}}} name="Splash" component={Splash} />
      <Stack.Screen options={{headerStyle: {backgroundColor: '#22abe6'}}} name="Login" component={Login} />
      <Stack.Screen options={{headerStyle: {backgroundColor: '#22abe6'}}} name="SignUp" component={SignUp} />
      <Stack.Screen options={{headerStyle: {backgroundColor: '#22abe6'}}} name = "CloudFitness" component={CloudFitness}/>
    </Stack.Navigator>
  );
}


export default MyStack;